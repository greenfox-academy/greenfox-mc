'use strict'

function Monitor() {
  let requests = [];

  async function registerIncomingRequest(url, params, time) {
    requests.push({url, params, time})
  }

  async function getStatistic() {
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
