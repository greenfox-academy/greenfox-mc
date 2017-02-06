import UserSchema from './user';

const schemas = {
	User: UserSchema
};

function Schemas () {
	function get (schemaName) {
		if (schemas.hasOwnProperty(schemaName)) {
			return schemas[schemaName];
		}
	}

	return {
		get
	}
}

export default Schemas;