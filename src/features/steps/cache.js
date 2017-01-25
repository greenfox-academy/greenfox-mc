'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

export default function () {
    this.When(/^I increment a null value$/, async function () {
        this.context.cache = this.container.get('cache');

        await this.context.cache.set('mango', null);
        await this.context.cache.increment('mango', 1);
    });

    this.Then(/^I should get (\d+)$/, function (text) {
        const value = this.context.cache.get('mango');

        return chai.assert.eventually.equal(value, text);
    });
};
