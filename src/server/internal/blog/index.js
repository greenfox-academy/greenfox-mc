'use strict';

function Blog(container) {
  const implementation = container.get('config').get(Blog.serviceName);
  return container.getImplementation(Blog.serviceName, implementation);
}

Blog.type = 'factory';
module.exports = Blog;
