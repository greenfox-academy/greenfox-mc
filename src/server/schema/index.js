import UserSchema from './user';
import { graphql } from 'graphql';

const schemas = {
	User: UserSchema
};

function Schemas () {
	function get (schemaName) {
		if (schemas.hasOwnProperty(schemaName)) {
			const schema = schemas[schemaName];
			return {
				schema,
				async query (query) {
					return await graphql(schema, query);
				}
			}
		}
	}

	return {
		get
	}
}

export default Schemas;