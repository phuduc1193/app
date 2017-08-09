import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

// Define the User type
var userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

// Define the Query type
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: function (_, {id}) {
        return fakeDatabase.users[0];
      }
    },
    getUsers: {
      type: new GraphQLList(userType),
      args: {},
      resolve: function (_) {
        return fakeDatabase.users;
      }
    }
  }
});

module.exports = new GraphQLSchema({query: queryType});

    // Maps username to content
    var fakeDatabase = {
      'users': [{
        id: 'a',
        name: 'alice',
      },
      {
        id: 'b',
        name: 'bob',
      }]
    };