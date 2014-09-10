'use strict';

var defaultConfig = require('./default');
var wrapper = require('../../config');
var config = module.exports = Object.create(defaultConfig);

wrapper(config);

config.service = config.service.replace(/\/+$/, '');
