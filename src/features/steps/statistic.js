'use strict';

import { expect } from 'chai';

export default function () {
  this.When('the request statistic is calculated', async function () {
    const queue = this.container.get('queue');
    const requestStatistic = this.container.get('requeststatistic');
    const queueName = 'request-statistic';

    const messageHandler = async (message) => {
      await requestStatistic.processMessage(message);
    }

    this.context.promise = this.tools.getConsumePromise(queue, queueName, messageHandler);
  });

  this.When('the system recalculate the requests', async function () {
    const requestStatistic = this.container.get('requeststatistic');
    await requestStatistic.recalculate();
  });

  this.Then('I see "$value" for "$key" in the statistics', async function(value, key) {
    const requestStatistic = this.container.get('requeststatistic');
    const result = await requestStatistic.getStatistics();
    expect(result[key].toString()).to.eql(value);
  });

 }


