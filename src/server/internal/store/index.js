'use strict';

import Schemas from '../../schema';

function Store (container) {
	function getSchema (schemaName) {
		return Schemas().get(schemaName);
	}

	return {
		getSchema
	}
}

Store.type = 'factory';
module.exports = Store;