'use strict';

function waitForElement(element, selector, callback, timeout) {
  timeout = timeout || 5000;
  const interval = 10;
  const timer = setInterval(function() {
    const foundElements = element.find(selector);
    if (foundElements.length) {
      callback(foundElements);
    }
    timeout = timeout - interval;
    if (timeout <= 0){
      clearInterval(timer);
    }
  }, interval);
}

async function getConsumePromise(queue, queueName, customMessageHandler) {
  return new Promise((resolve, reject) => {

    let messageCount = 0;
    const messageHandler = async (message) => {
      try {
        await customMessageHandler(message);
        messageCount += 1;
        const size = await queue.getMessageCount(queueName);
        if (size === 0) {
          resolve(messageCount);
        }

      } catch(e) {
        reject(e);
      }
    }
    queue.consume(queueName, messageHandler).catch((e) => {
      reject(e);
    });
  });
}



module.exports = Object.freeze({
  waitForElement,
  getConsumePromise
});
