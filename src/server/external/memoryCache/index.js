function memoryCache () {
  const cache = {}

  const set = (key, value, cb) => {
    cache[key] = value;
		cb(null, cache[key]);
  }

  const get = (key, cb) => {
    if (typeof cache[key] === 'undefined') {
      cache[key] = 0;
    }
    return cb(null, cache[key]);
  }

	const incr = (key, amount, cb) => {
		if (typeof cache[key] === 'undefined') {
			cache[key] = 0;
		}
		cache[key] = cache[key] += amount;
		return cb(null, cache[key]);
	}

  return {
    get,
    set,
		incr
  }
}

module.exports = memoryCache
