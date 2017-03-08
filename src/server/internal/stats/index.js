
function Stats(cache, requestMonitor, queue) {

  queue.consume('stats', (message) => {
    if (message === 'registerIncomingRequest') {
      registerIncomingRequest();
    } else {
      throw new Error('unknown message');
    }
  });

  async function registerIncomingRequest() {
    await cache.increment('totalIncomingRequests', 1);
  }

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests')
    }
  }

  async function recalculate() {
    await cache.flushAll();
    const requests = await requestMonitor.getRequests();
    await Promise.all(
      requests.map(async () => {
        await cache.increment('totalIncomingRequests', 1);
      })
    );
  }

  return Object.freeze({
    registerIncomingRequest,
    getStatistics,
    recalculate
  });
}

Stats.deps = ['cache', 'requestmonitor', 'queue'];

module.exports = Stats;
