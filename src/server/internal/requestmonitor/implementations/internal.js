
function RequestMonitor(store, queue) {

  async function registerIncomingRequest(url) {
    const request = await store.getSchema('Request');
    await request.query(
      `mutation Mutation($url: String!) {
        registerRequest(url: $url) {
          message
        }
      }`,
      {url}
    );
    await queue.publish('request-statistic', url);
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
