'use strict';

module.exports = function (config) {
  // basic
  config.port = 3001;
  config.host = '127.0.0.1';
  config.templateFolder = './templates';

  // ip
  config.whiteList = [ '127.0.0.1' ];
  //config.blackList = [];
  
  // ssl
  config.sslKey = './ssl/server.key';
  config.sslCert = './ssl/server.crt';
  config.sslCa = './ssl/ca.crt';

  // facebook
  config.service = 'https://graph.facebook.com/v2.1/';
  config.appId = '';
  config.appSecret = '';
};
