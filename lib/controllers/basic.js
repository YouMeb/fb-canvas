'use strict';

var parse = require('co-body');
var signedRequest = require('salesforce-signed-request');
var noti = require('../noti');
var request = require('../request');
var config = require('../config');
var controller = module.exports;

controller.entryPointAction = function *() {
  var formData = yield parse.form(this);

  if (!formData.signed_request) {
    this.status = 403;
    return;
  }

  var data = signedRequest(formData.signed_request, config.appSecret);
  this.body = '<a href="http://github.com/youmeb/fb-canvas">fb-canvas</a>';
};

controller.redirectAction = function *() {
  this.href = decodeURIComponent(this.query.href || '');
  this.redirect(href);
};

controller.notiAction = function *(next) {
  var name = this.params.name;
  var token = this.query.access_token;
  var requestable = noti.get(name);

  if (!requestable) {
    return yield* next;
  }

  this.body = yield request(requestable, token);
};
