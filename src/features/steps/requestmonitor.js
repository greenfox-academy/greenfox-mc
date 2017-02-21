'use strict';

import { expect } from 'chai';

export default function () {
    this.When('the system get an Incoming request', async function () {
        const monitor = this.container.get('requestmonitor');
        await monitor.registerIncomingRequest();
    });

    this.Then('I see "$value" for "$key" in the statistics', async function (value, key) {
        const monitor = this.container.get('requestmonitor');
        const result = await monitor.getStatistics();
        expect(result[key]).to.eql(parseInt(value));
    });

    this.When('the system get an Incoming request with an url "$url" and request body "$body"', async function (url, body) {
        const monitor = this.container.get('requestmonitor');
        await monitor.registerIncomingRequest(url, body);
    });

    this.When('I get all requests registered', async function () {
        const monitor = this.container.get('requestmonitor');
        await monitor.registerIncomingRequest('/hi', 'test');
        this.context.allRequests = await monitor.getAllRequests();
    });

    this.Then('I see at least "$value" requests in the statistics', async function (value) {
        console.log(this.context.allRequests.data.requests)
        expect(this.context.allRequests.data.requests.length).to.eql(parseInt(value));
    });
}
