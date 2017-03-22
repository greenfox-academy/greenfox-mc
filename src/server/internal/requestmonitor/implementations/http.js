function RequestMonitorHttp() {

  async function getRequests() {
    const result = await fetch('http://localhost:8080/requests', {});
    const response = await result.json();

    return response;
  }

  return Object.freeze({
    registerIncomingRequest: ()=>{},
    getRequests
  });
}

RequestMonitorHttp.deps = [];

module.exports = RequestMonitorHttp;
