'use strict';

import schemas from '../../schema';

function Store (container) {
	function getSchema (schemaName) {
		console.log('#####');
		console.log(schemas);
		if (schemas.hasOwnProperty(schemaName)) {
			return schemas[schemaName];
		}
	}

	return {
		getSchema
	}
}

Store.type = 'factory';
module.exports = Store;