import _ from 'lodash';

function Security(cache, queue, requestmonitor) {

  async function processMessage(message) {
    if (_.includes(message, 'inject')) {
      await cache.increment('securityIssue', 1);
    }
  }

  return Object.freeze({
    processMessage
  });
}

Security.deps = ['cache', 'queue', 'requestmonitor'];

module.exports = Security;
