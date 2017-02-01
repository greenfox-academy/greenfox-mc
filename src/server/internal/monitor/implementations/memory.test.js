/* global describe, it */
'use strict';

import memoryMonitor from './memory';
import { expect } from 'chai';

describe('Memory request monitor', () => {

  const monitor = memoryMonitor();
  it('should add item to cache', async () => {
    await monitor.registerIncomingRequest('/fakeurl', {}, Date.now());
	const stats = await monitor.getStatistic()
	expect(stats).to.have.any.keys('totalIncomingRequests');
	expect(stats.totalIncomingRequests).to.eql(1);
  });

});
