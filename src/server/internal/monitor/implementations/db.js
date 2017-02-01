'use strict'

function DBMonitor(cache) {
  async function registerIncomingRequest(url, params, time) {
	// TODO: should other data stored in cache/db/somewhere?
	cache.increment('totalIncomingRequests', 1);
  }

  async function getStatistic() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests')
    }
  }

  return Object.freeze({
    registerIncomingRequest,
    getStatistic
  });
}

DBMonitor.deps = ['cache'];
module.exports = DBMonitor;
