
function RequestMonitor(cache, queue, store) {

  async function registerIncomingRequest(url, params, time) {
    const request = await store.getSchema('Request');
    queue.publish('stats', 'recalculateRequests');
    await request.query(
      `mutation Mutation($url: String!) {
        registerRequest(url: $url) {
          message
        }
      }`,
      {url}
    );
  }

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests')
    }
  }

  return Object.freeze({
    registerIncomingRequest,
    getStatistics
  });
}

RequestMonitor.deps = ['cache', 'queue', 'store'];

module.exports = RequestMonitor;
