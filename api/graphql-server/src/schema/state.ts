import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import Resolvers from '../resolvers';

let StateType: GraphQLObjectType = new GraphQLObjectType({
  name: 'State',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString, description: 'State\'s name' },
    code: { type: GraphQLString, description: 'State\'s shortcode' }
  }
});

let State = {
  type: new GraphQLList(StateType),
  description: 'List of states within the country.',
  args: {
    code: { type: GraphQLString, description: 'Optional state code.' },
    name: { type: GraphQLString, description: 'Optional name of a state (example: \'New\' to find \'New York\').' }
  },
  resolve: (_, args) => { return Resolvers.state(_, args); }
}

export default State;