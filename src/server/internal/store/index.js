import schemas from '../../schemas/schemas';

function Store(gql) {

  function getSchema(schemaName) {
    const schema = schemas[schemaName];
    return gql(schema);
  }

  return Object.freeze({
    getSchema
  });
}

Store.deps = ['gql'];

module.exports = Store;
