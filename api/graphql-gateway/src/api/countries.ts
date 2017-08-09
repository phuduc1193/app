import axios from 'axios';
import Config from '../config';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

axios.get(Config.prototype.apiGateway + '/resource/countries')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Define the User type
var countryType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

// Define the Query type
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    countries: {
      type: countryType,
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
