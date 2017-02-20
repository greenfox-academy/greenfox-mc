import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

function Request() {
    return new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: {
                url: {
                    type: GraphQLString,
                    resolve() {
                        return 'value';
                    }
                },
                body: {
                    type: GraphQLString,
                    resolve() {
                        return 'value';
                    }
                }
            }
        }),
        mutation: new GraphQLObjectType({
            name: 'Mutation',
            fields: {
                saveRequest: {
                    args: {
                        url: {
                            type: new GraphQLNonNull(String)
                        },
                        body: {
                            type: new GraphQLNonNull(String)
                        }
                    },
                    resolve(root, args) {
                        return new Promise((resolve, reject) => {
                            // do the save here
                            resolve(true);
                        })
                    }
                }
            }
        })
    });
}

module.exports = Request;
