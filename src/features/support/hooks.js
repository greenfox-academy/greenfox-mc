'use strict';

import 'babel-polyfill';
export default function () {

    this.Before(async function () {
        const cache = this.container.get('cache');
        const db = this.container.get('database');

        await cache.flushAll();
        await db.reset();
    });

}
