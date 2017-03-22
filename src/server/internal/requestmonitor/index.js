'use strict';

function RequestMonitor(container) {
  const implementation = container.get('config').get(RequestMonitor.serviceName, 'http');
  return container.getImplementation(RequestMonitor.serviceName, implementation);
}

RequestMonitor.type = 'factory';
module.exports = RequestMonitor;
