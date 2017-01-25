const diTools = require('lab-di/tools')();

const di = diTools.getDI();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');

di.registerModule(require('./cache'), 'cache');
di.registerModule(require('./cache/implementations/memory'), 'cache-memory');
di.registerModule(require('./cache/implementations/redis'), 'cache-redis');

export default di;
