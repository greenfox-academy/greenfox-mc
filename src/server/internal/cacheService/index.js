function cacheService (cacheImplementation) {
  const get = (key, cb) => {
    cacheImplementation.get(key, cb);
  }
  const increment = (key, amount, cb) => {
    cacheImplementation.incr(key, amount, cb);
  }

  return {
    get,
    increment
  }
}

module.exports = cacheService
