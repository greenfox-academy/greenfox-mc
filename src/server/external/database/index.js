'use strict';

function Database(container) {
  const implementation = container.get('config').get(Database.serviceName);
  return container.getImplementation(Database.serviceName, implementation);
}

Database.type = 'factory';
module.exports = Database;
