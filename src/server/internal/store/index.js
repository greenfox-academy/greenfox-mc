import { graphql } from 'graphql';

function Store(container) {
    function Schema(schema) {
        async function query(query) {
            return await graphql(schema, query);
        }
        async function mutation(mutator) {
            return await graphql(schema, mutator);
        }
        return Object.freeze({
            query,
            mutation
        });
    }

    function getSchema(name) {
        return Schema(container.get(name));
    }

    return Object.freeze({
        getSchema
    });

}

Store.type = 'factory';
module.exports = Store;
