import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import State from './state';
import Resolvers from '../resolvers';

let CountryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString, description: 'A country name' },
    code: { type: GraphQLString, description: 'A country code based on ISO Alpha-2' },
    state: State
  }
});

let Country = {
  type: new GraphQLList(CountryType),
  description: 'Get a list of all countries or any specific countries.',
  args: {
    id: { type: GraphQLInt, description: 'Optional ID of a country.' },
    code: { type: GraphQLString, description: 'Optional code of a country (example: \'us\' is for United States of America).' },
    name: { type: GraphQLString,description: 'Optional name of a country (example: \'United\' to find United States of America).' }
  },
  resolve: (_, args) => { return Resolvers.country(_, args);}
};

export default Country;