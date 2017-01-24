/* global describe expect it */

const memoryCache = require('./index')();

describe('get', () => {
  it('should get 0 if the value is not defined', (done) => {
  memoryCache.get('foo', (err, val) => {
    expect(val).toBe(0);
    done();
  })
  });
});

describe('set', () => {
  it('get should return with the recently set value', (done) => {
		memoryCache.set('baz', 'foo', () => {
			memoryCache.get('baz', (err, val) => {
				expect(val).toBe('foo');
				done();
			});
		});
  });
});

describe('increment', () => {
  it('should increment a value by n and return the new value', (done) => {
		memoryCache.incr('n', 3, () => {
			memoryCache.get('n', (err, val) => {
				expect(val).toBe(3);
				done();
			});
		});
  });
});
