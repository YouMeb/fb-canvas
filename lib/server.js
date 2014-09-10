'use strict';

var chalk = require('chalk');
var template = require('./template');
var app = require('./app');
var config = require('./config');

require('./routes');

module.exports = function *() {
  console.log();

  try {
    yield [
      app.listen(config.port, config.host),
      template.load(),
    ];
  } catch (e) {
    console.log(chalk.magenta('  Failed to create server'));
    console.log();
    console.log(e.stack.replace(/^/g, '  '));
    console.log();
    return;
  }

  console.log('  fb-noti is running on %s:%s'
    , chalk.cyan(config.host)
    , chalk.yellow(config.port));
  console.log();
};
