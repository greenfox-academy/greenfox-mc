import { graphql } from 'graphql';

function GQLFactory() {
	return (schema) => {
		return Object.assign({}, schema, { query: async function (query) {
			return graphql(this.schema, query);
		}})
	}
}

GQLFactory.type = 'factory';

module.exports = GQLFactory;