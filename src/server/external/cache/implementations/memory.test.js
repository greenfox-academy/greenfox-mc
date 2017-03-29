'use strict';

import memoryCache from './memory';
import { expect } from 'chai';

describe('Memory cache', () => {

  const cache = memoryCache();
  it('should add item to cache', () => {
    cache.increment('test', 2);
    expect(cache.get('test')).to.eql(2);
  });

  it('should throw error for bad value', () => {
    const increment = () => cache.increment('bad', 'bad value');
    expect(increment).to.throw(/Can not increment/);
  });

  it('should throw error for bad key', () => {
    const increment = () => cache.increment(null, 1);
    expect(increment).to.throw(/You have to use/);
  });

	it('should set an item in cache', () => {
    cache.set('foo', 5);
    expect(cache.get('foo')).to.eql(5);
  });

	it('should overwrite an already existing key', () => {
		cache.set('foo', 1);
		expect(cache.get('foo')).to.eql(1);
	});

});
