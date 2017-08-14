import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import Resolvers from '../resolvers';

let RelationshipStatusType: GraphQLObjectType = new GraphQLObjectType({
  name: 'RelationshipStatus',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString, description: 'Relationship status.' },
    preposition: { type: GraphQLString, description: 'Preposition go with the status.' },
    mark: { type: GraphQLString, description: 'Relationship anniversary or marking.' }
  }
});

let RelationshipStatus = {
  type: new GraphQLList(RelationshipStatusType),
  description: 'List of relationship status.',
  args: {
    name: { type: GraphQLString, description: 'Optional relationship status hint for searching.' }
  },
  resolve: (_, args) => { return Resolvers.relationshipStatus(_, args); }
}

export default RelationshipStatus;