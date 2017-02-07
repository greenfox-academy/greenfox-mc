'use strict'

import {graphql} from 'graphql';

function QLFactory() {
  return (schema) => ({
    query: async function (requestString) {
      return graphql(schema, requestString);
    }
  })
}

QLFactory.type = 'factory';
module.exports = QLFactory;
