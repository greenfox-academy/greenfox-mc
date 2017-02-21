'use strict';

import { expect } from 'chai';

export default function () {

    this.When('a request comes in to "$url" url with "$body" body', async function (url, body) {
        const db = this.container.get('database');
        this.context.body = body;
        this.context.url = url;
        let result = await db.save({ url, body });
        expect(result).exist
    });

    this.Then('it should be saved', async function () {
        const db = this.container.get('database');
        const result = await db.queryByUrl(this.context.url);
        expect(result.length).to.be.above(0);
        expect(result[0].body).to.eql(this.context.body);
    });
}

