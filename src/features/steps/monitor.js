'use strict';

import { expect } from 'chai';

export default function () {
	this.When(/^I pass a request url, params and time$/, function () {
		const monitor = this.container.get('monitor');
		monitor.registerIncomingRequest('/', {}, Date.now());
	});

	this.Then(/^I get an increased number of total requests$/, function () {
		const monitor = this.container.get('monitor');
		const totalNumberOfRequests = monitor.getStatistic();
		expect(totalNumberOfRequests).to.eql({totalIncomingRequests: 1});
	});
}
