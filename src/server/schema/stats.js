import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/type';

const statsType = new GraphQLObjectType({
  name: 'Stats',
  description: '',
  fields: () => ({
    'totalIncomingRequests': {
      type: GraphQLInt,
      description: ''
    }
  })
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    stats: {
      type: statsType
    }
  })
});


module.exports = new GraphQLSchema({
  query: queryType,
  types: [ statsType ]
});