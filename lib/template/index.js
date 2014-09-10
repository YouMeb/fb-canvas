'use strict';

var requirep = require('requirep');
var chalk = require('chalk');
var path = require('path');
var fs = requirep('fs');
var config = require('../config');

exports.load = function *() {
  var templateFolder = path.resolve(config.templateFolder);
  var files = yield fs.readdir(templateFolder);

  yield files.map(function *(file) {
    if (/^[^\.].*\.js$/.test(file)) {
      yield loadFile(path.join(templateFolder, file));
    }
  });
};

function *loadFile(file) {
  try {
    require(file);
  } catch (e) {
    console.log(chalk.magenta('  failed to require %s'), file);
    console.log(e.stack.replace(/^/g, '  '));
    console.log();
  }
}
