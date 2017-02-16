'use strict';

import { expect } from 'chai';

export default function () {
    this.When('a "$method" request comes in to "$url"', async function (method, url) {
        const db = this.container.get('database');

        this.context.method = method;
        this.context.url = url;

        await db.save({
            method,
            url
        });
    });

    this.Then('it should be saved', async function () {
        const db = this.container.get('database');
        const result = await db.queryByUrl(this.context.url);
        expect(result.length).to.be.above(0);
        expect(result[0].method).to.eql(this.context.method);
    });
}
