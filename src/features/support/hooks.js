'use strict';

import 'babel-polyfill';
export default function () {

  this.Before(async function () {
    const cache = this.container.get('cache');
    this.context.db = this.container.get('database');
    
    await cache.flushAll();
    await this.context.db.reset(); //evil!

  });

}
