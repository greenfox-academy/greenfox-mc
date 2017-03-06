
function RequestMonitor(cache, queue, store) {

  async function registerIncomingRequest(url, params, time) {
    const request = await store.getSchema('Request');
    queue.publish('requests', 'recalculateStats');
    await request.query(
      `mutation Mutation($url: String!) {
        registerRequest(url: $url) {
          message
        }
      }`,
      {url}
    );
  }

  async function getRequests() {
    const request = await store.getSchema('Request');
    const result = await request.query(`query{request{url}}`);
    return result.data.request;
  }

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests')
    }
  }

  return Object.freeze({
    registerIncomingRequest,
    getStatistics,
    getRequests
  });
}

RequestMonitor.deps = ['cache', 'queue', 'store'];

module.exports = RequestMonitor;
