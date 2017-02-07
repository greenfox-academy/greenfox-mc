import { resolveSchema } from '../../schema'

function Store(ql) {

  function getSchema(schemaName) {
    return ql(resolveSchema(schemaName));
  }

  return Object.freeze({
    getSchema
  });
}

Store.deps = ['ql'];

module.exports = Store;
