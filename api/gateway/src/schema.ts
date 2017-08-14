import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import Country from './schema/country';
import Gender from './schema/gender';
import RelationshipStatus from './schema/relationship.status';
import PhoneType from './schema/phone.type';

let QueryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    country: Country,
    gender: Gender,
    relationshipStatus: RelationshipStatus,
    phoneType: PhoneType
  }
});

let graphQLSchema: GraphQLSchema = new GraphQLSchema({
  query: QueryType
});

export default graphQLSchema;