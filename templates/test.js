'use strict';

var noti = require('../lib/noti');

noti.create('example', {
  href: '{{ href }}',
  template: 'fb-noti is awesome',
  ref: 'example'
});
