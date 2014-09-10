'use strict';

var swig = require('swig');
var util = require('util');
var RequestAble = require('../request/requestable');

var _href = Symbol('href');
var _template = Symbol('template');
var _ref = Symbol('ref');
var notifications = {};

module.exports = Noti;

util.inherits(Noti, RequestAble);

function Noti(options) {
  options || (options = {});
  this[_href] = swig.compile(encodeURIComponent(options.href || ''));
  this[_template] = swig.compile(options.template);
  this[_ref] = swig.compile(options.ref);
}

Noti.create = function (name, options) {
  notifications[name] = new Noti(options);
  return Noti;
};

Noti.get = function (name) {
  return notifications[name];
};

Noti.prototype = {
  get uri() {
    return '/notifications';
  },

  toJSON: function () {
    return {
      href: this[_href],
      template: this[_template],
      ref: this[_ref]
    };
  },

  getParameters: function (query) {
    query || (query = {});

    var data = this.toJSON();

    Object.keys(data).forEach(function (key) {
      data[key] = data[key](query);
    });

    return data;
  }
};
