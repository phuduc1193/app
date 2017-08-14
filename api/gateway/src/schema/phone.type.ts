import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import Resolvers from '../resolvers';

let PhoneTypeType: GraphQLObjectType = new GraphQLObjectType({
  name: 'PhoneType',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString, description: 'Phone type.' },
  }
});

let PhoneType = {
  type: new GraphQLList(PhoneTypeType),
  description: 'List of phone types.',
  args: {
    name: { type: GraphQLString, description: 'Optional phone type name for searching.' }
  },
  resolve: (_, args) => { return Resolvers.phoneType(_, args); }
}

export default PhoneType;