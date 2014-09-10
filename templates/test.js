'use strict';

var noti = require('../lib/noti');

noti.create('example', {
  href: '{{ href }}',
  template: 'fb-canvas is awesome',
  ref: 'example'
});
