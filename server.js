'use strict';

var co = require('co');
var server = require('./lib/server');

co(server)(function (err) {
  if (err) {
    console.log(err.stack || err.message);
  }
});
