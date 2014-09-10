'use strict';

var koa = require('koa');
var router = require('koa-router');
var ipblock = require('koa-ipblock');
var listen = require('./listen');
var config = require('../config');
var app = module.exports = koa();

app.listen = listen;

app.use(function *(next) {
  if (this.path === '/') {
    return yield *next;
  }

  // ipblock
  if (config.whiteList) {
    yield ipblock.white(config.whiteList).call(this, next);
  } else if (config.blackList) {
    yield ipblock(config.blackList).call(this, next);
  }
});

app.use(router(app));
