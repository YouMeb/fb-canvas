'use strict';

var koa = require('koa');
var router = require('koa-router');
var ipblock = require('koa-ipblock');
var listen = require('./listen');
var config = require('../config');
var app = module.exports = koa();

app.listen = listen;

// ipblock
if (config.whiteList) {
  app.use(ipblock.white(config.whiteList));
} else if (config.blackList) {
  app.use(ipblock(config.blackList));
}

app.use(router(app));
