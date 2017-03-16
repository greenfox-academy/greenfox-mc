'use strict';

import { expect } from 'chai';

export default function () {
  this.When('the security check is done', async function () {
    const queue = this.container.get('queue');
    const security = this.container.get('security');
    const queueName = 'securitycheck';

    const messageHandler = async (message) => {
      await security.processMessage(message);
    }

    this.context.promise = this.tools.getConsumePromise(queue, queueName, messageHandler);
  });
 }
