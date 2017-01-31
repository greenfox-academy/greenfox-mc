'use strict'

function Monitor() {
  let requests = [];

  function registerIncomingRequest(url, params, time) {
    requests.push({url, params, time})
  }

  function getStatistic() {
    return {
      totalIncomingRequests: requests.length
    }
  }

  return Object.freeze({
    registerIncomingRequest,
    getStatistic
  });
}

module.exports = Monitor;
