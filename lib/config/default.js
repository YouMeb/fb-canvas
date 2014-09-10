'use strict';

var path = require('path');
var config = module.exports;

// basic
config.port = 3001;

// ssl
config.sslKey = './ssl/server.key';
config.sslCert = './ssl/server.crt';
config.sslCa = './ssl/ca.crt';

// facebook
config.service = 'https://graph.facebook.com/v2.1';
