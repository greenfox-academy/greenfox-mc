'use strict';

import { expect } from 'chai';

export default function () {
  this.When('a "$method" request comes in to "$url"', async function (method, url) {
    this.context.method = method;
    this.context.url = url;
    
    await this.context.db.save({
        method,
        url
    });
  });

  this.Then('it should be saved', async function () {
    const result = await this.context.db.queryByUrl(this.context.url);
    expect(result.method).to.eql(this.context.method);
  });
}
