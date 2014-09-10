'use strict';

var requirep = require('requirep');
var fs = requirep('fs');
var path = require('path');
var https = require('https');
var config = require('../config');

module.exports = function *() {
  var res = [
    yield fs.readFile(path.resolve(config.sslKey)),
    yield fs.readFile(path.resolve(config.sslCert)),
    yield fs.readFile(path.resolve(config.sslCa))
  ];

  var options = {
    key: res[0],
    cert: res[1],
    ca: res[2],
    requestCert: true,
    rejectUnauthorized: false
  };

  var server = https.createServer(options, this.callback());

  var args = Array.prototype.slice.call(arguments);

  yield function (cb) {
    args.push(cb);
    server.listen.apply(server, args);
  };
};
