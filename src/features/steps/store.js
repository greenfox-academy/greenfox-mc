'use strict';

import { expect } from 'chai';

export default function () {
	this.When(/^I pass "([^"]*)", I get a schema object$/, function (schemaName) {
		const store = this.container.get('store');
		const schema = store.getSchema(schemaName);
		expect(schema).to.not.eql(null);
	});

	this.When(/^I pass "([^"]*)" query to "([^"]*)" schema, I get a promise$/, async function (query, schemaName) {
		const store = this.container.get('store');
		const schema = store.getSchema(schemaName);
		const queryResult = await schema.query(query);
		expect(queryResult).not.to.eql(null);
	});
}
