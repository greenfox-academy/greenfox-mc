function cache(container) {
    const implementation = process.env.CACHE_STORE || 'memory';
    return container.getImplementation(cache.serviceName, implementation);
}

cache.type = 'factory';
module.exports = cache;