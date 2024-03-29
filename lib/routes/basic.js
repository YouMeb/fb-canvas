'use strict';

var app = require('../app');
var basic = require('../controllers/basic');

app.post('/', basic.entryPointAction);
app.get('/redirect', basic.redirectAction);
app.post('/noti', basic.notiAction);
