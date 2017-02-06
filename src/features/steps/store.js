'use strict';

import { expect } from 'chai';

export default function () {
  this.When('I request schema "$storeName"', function (schemaName) {
    this.context.schemaName = schemaName;
  });

  this.Then('I should get an object', async function() {
    const store = this.container.get('store');
    const result = store.getSchema(this.context.schemaName);

    expect(result).to.be.an('object');
  });
}
