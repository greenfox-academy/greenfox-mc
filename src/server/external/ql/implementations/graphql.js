'use strict'

import {graphql} from 'graphql';

function GraphQlWrapper(schema) {

  async function query(requestString, resolver) {
    return graphql(schema, requestString, resolver);
  }

  return Object.freeze({
    query
  });

}

module.exports = GraphQlWrapper;