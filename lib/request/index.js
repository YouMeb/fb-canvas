'use strict';

var qs = require('qs');
var request = require('superagent');
var RequestAble = require('./requestable');
var config = require('../config');

module.exports = function (method, requestable, token) {
  if (!(requestable instanceof RequestAble)) {
    throw new Error('The first argument is not a RequestAble instance.');
  }

  var url = config.service + requestable.toUri();
  var params = requestable.getParameters();

  if (token) {
    params.access_token = token;
  }

  url += '?' + qs.stringify(params);

  var req = request[method](url)
    .set('Accept', 'application/json');

  req.end = createEed(req);

  return req;
};

function createEed(req) {
  var oldEnd = req.end;

  return function (res) {
    return new Promise(function (resolve, reject) {
      if (!res.ok) {
        return reject(new Error(res.text));
      }
      resolve(res.body);
    });
  };
}
