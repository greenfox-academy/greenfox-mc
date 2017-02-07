const { buildSchema } = require('graphql');

module.exports = {
	helloWorld: {
		schema: buildSchema(`
			type Query {
				hello: String
			}
		`)
	}
}