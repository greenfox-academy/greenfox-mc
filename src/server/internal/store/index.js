import { graphql } from 'graphql';

function Store(container) {
    function Schema(schema) {
        async function query(query) {
            return await graphql(schema, query);
        }
        async function mutation(mutator) {
            return await graphql(schema, mutator);
        }
        async function save(url, params) {
            let mutatorString = `
            mutation M {
                request: saveRequest(url: "${url}", body: "${params}") {
                    url, body
                }
            }
        `
            return await this.mutation(mutatorString);
        }
        async function getAll() {
            return await this.query(`{requests { url, body }}`)
        }
        return Object.freeze({
            getAll,
            query,
            mutation,
            save
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
