
function RequestStatistic(cache, queue, requestmonitor) {

  async function processMessage(message) {
    await cache.increment('totalIncomingRequests', 1);
    await queue.publish('securitycheck', message);
  }

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests'),
      securityIssue: await cache.get('securityIssue')
    }
  }

  async function recalculate() {
    await cache.flushAll();
    const requests = await requestmonitor.getRequests();
    await Promise.all(
      requests.map(async (request) => {
        await processMessage(request.url);
      })
    );
  }

  return Object.freeze({
    processMessage,
    getStatistics,
    recalculate
  });
}

RequestStatistic.deps = ['cache', 'queue', 'requestmonitor'];

module.exports = RequestStatistic;
