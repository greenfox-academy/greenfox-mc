'use strict'

import _ from 'lodash';
import validate from '../../../lib/validate';
import VError from 'verror';

function MemoryQueue () {
  let queue = {};

  async function consume(queueName, callback) {
    async function handleMessages() {
      if (!_.get(queue, queueName)) {
        throw new VError(`Queue does not exist: ${queueName}`);
      }
      const message = queue[queueName].shift();
      if (!message) {
        return false;
      }
      await callback(message);
      handleMessages();
    }
    await handleMessages(queueName, callback)
    return true;
  }


  function publish(queueName, message) {
    if (!queue.hasOwnProperty(queueName)) {
      queue[queueName] = [];
    }
    queue[queueName].push(message);
  }

  function getMessageCount(queueName) {
    return Promise.resolve(queue[queueName].length);
  }

  function remove(queueName) {
    delete queue[queueName];
  }

  return Object.freeze({
    publish,
    consume,
    remove,
    getMessageCount
  });
}

module.exports = MemoryQueue;
