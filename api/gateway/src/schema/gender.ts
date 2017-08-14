import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import Resolvers from '../resolvers';

let GenderType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Gender',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString, description: 'Gender type.' },
  }
});

let Gender = {
  type: new GraphQLList(GenderType),
  description: 'List of genders.',
  args: {
    name: { type: GraphQLString, description: 'Optional gender type search.' }
  },
  resolve: (_, args) => { return Resolvers.gender(_, args); }
}

export default Gender;