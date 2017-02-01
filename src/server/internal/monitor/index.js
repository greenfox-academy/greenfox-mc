'use strict';

function Monitor(container) {
  const implementation = container.get('config').get(Monitor.serviceName) || 'db';
  return container.getImplementation(Monitor.serviceName, implementation);
}

Monitor.type = 'factory';
module.exports = Monitor;
