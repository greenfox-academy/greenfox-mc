
function RequestMonitor(store, queue) {

  async function registerIncomingRequest(url, params, time) {
    const request = await store.getSchema('Request');
    await request.query(
      `mutation Mutation($url: String!) {
        registerRequest(url: $url) {
          message
        }
      }`,
      {url}
    );

    queue.publish('stats', 'registerIncomingRequest');
  }

  async function getRequests() {
    const request = await store.getSchema('Request');
    const result = await request.query(`query{request{url}}`);
    return result.data.request;
  }

  return Object.freeze({
    registerIncomingRequest,
    getRequests
  });
}

RequestMonitor.deps = ['store', 'queue'];

module.exports = RequestMonitor;
