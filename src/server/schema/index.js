'use strict';

import stats from './stats';

const schemas = {
  stats
};

export function resolveSchema(schemaName) {
  const schema = schemas[schemaName];
  if (!schema) {
    throw new Error(`[STORE] The requested schema ${schemaName} is not registered.`);
  }
  return schema;
}

