'use strict';

var noti = require('../noti');
var request = require('../request');
var controller = module.exports;

controller.entryPointAction = function *() {
  this.body = '<a href="http://github.com/youmeb/noti">fb-noti</a>';
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
