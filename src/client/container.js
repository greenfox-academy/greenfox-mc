'use strict';

const di = require('lab-di')();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');

const app = require('./app');
const store = require('./store');
const history = require('./history');

const root = require('./components/root');
const admin = require('./components/admin');
const requests = require('./actions/requests');

di.registerModule(app, 'App');
di.registerModule(store, 'Store');
di.registerModule(history, 'History');
di.registerModule(root, 'Root');
di.registerModule(admin, 'Admin');
di.registerModule(requests, 'RequestActions');

di.registerModule(require('../server/internal/requestmonitor'), 'requestmonitor');
di.registerModule(require('../server/internal/requestmonitor/implementations/http'), 'requestmonitor-http');


module.exports = di;
