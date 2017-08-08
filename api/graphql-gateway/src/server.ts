import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from 'graphql';
import * as bodyParser from 'body-parser';

class Server {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.text({ type: 'application/graphql' }));
  }

  private routes(): void {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });

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

var schema = new GraphQLSchema({query: queryType});

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

    router.use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true,
      pretty: true,
    }));

    this.express.use('/', router);
  }

}

export default new Server().express;