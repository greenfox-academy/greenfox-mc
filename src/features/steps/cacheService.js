'use strict';

import { assert } from 'chai';

import memoryCache from '../../server/external/memoryCache';
import cacheService from '../../server/internal/cacheService';

export default function() {
  this.When('I request the key "$key"', function(key, done) {

    this.context.cacheService = cacheService(memoryCache());

    this.context.key = key;

    done();
  });

  this.Then('I get the value "$keyValue"', function(keyValue, callback) {
    this.context.cacheService.get(this.context.key, (err, value) => {
			assert.equal(value, keyValue);
			callback();
		})

  });

  this.When('I send a request to increase "$key" by "$amount"', function(key, amount, done) {

    this.context.cacheService = cacheService(memoryCache());

    this.context.key = key;
    this.context.amount = amount;
    done();
  });

  this.Then('I get the value of the key increased by the amount', function(callback) {
    this.context.cacheService.get(this.context.key, (err, originalValue) => {
			const amount = parseInt(this.context.amount, 10);
			this.context.cacheService.increment(this.context.key, amount, () => null);
			this.context.cacheService.get(this.context.key, (err, value) => {
				assert.equal(value, originalValue + amount);
			});
		});

    callback();
 });
}
