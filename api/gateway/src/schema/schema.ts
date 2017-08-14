import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import Country from './country';

let QueryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    country: Country
  }
});

let graphQLSchema: GraphQLSchema = new GraphQLSchema({
  query: QueryType
});

export default graphQLSchema;