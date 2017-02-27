'use strict';

import { expect } from 'chai';

export default function () {
	this.Given('that I made "$count" requests and cleared the cache', async function (count) {
		const monitor = this.container.get('requestmonitor');
		const cache = this.container.get('cache');
		for (var i = 0; i < count; i++) {
			await monitor.registerIncomingRequest('url');
		}
			cache.flushAll();
	});

  this.When('I recalculate the number of requests', async function () {
    const recalculateRequests = this.container.get('recalculateRequests');
    await recalculateRequests();
  });
}
