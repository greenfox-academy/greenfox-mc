'use strict';

import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    userName: String
  }
`);

export default schema;