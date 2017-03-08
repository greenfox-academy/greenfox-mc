
function RequestMonitor(store) {

  async function registerIncomingRequest(url, params, time) {
    const request = await store.getSchema('Request');
    // TODO: Publish message. 
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

  return Object.freeze({
    registerIncomingRequest,
    getRequests
  });
}

RequestMonitor.deps = ['store'];

module.exports = RequestMonitor;
