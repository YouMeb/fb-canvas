'use strict';

var defaultConfig = require('./default');
var config = module.exports = Object.create(defaultConfig);

try {
  var wrapper = require('../../config');
  wrapper(config);
} catch (e) {}

config.service = config.service.replace(/\/+$/, '');
