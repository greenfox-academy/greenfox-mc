
function Stats(cache, requestMonitor) {

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

Stats.deps = ['cache', 'requestmonitor'];

module.exports = Stats;
