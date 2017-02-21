import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

function Request(database) {

    let RequestType = new GraphQLObjectType({
        name: 'Request',
        fields: () => ({
            url: {
                type: GraphQLString
            },
            body: {
                type: GraphQLString
            }
        })
    })

    return new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                requests: {
                    type: new GraphQLList(RequestType),
                    resolve: async function () {
                        let result = await database.queryAll();
                        return result
                    }
                }
            })
        }),
        mutation: new GraphQLObjectType({
            name: 'Mutation',
            fields: {
                saveRequest: {
                    type: RequestType,
                    args: {
                        url: {
                            type: GraphQLString
                        },
                        body: {
                            type: GraphQLString
                        }
                    },
                    resolve: async function (root, args) {
                        let result = await database.save({
                            url: args.url,
                            body: args.body
                        })
                        return result;
                    }
                }
            }
        })
    });
}
Request.deps = ['database'];
module.exports = Request;
