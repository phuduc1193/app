import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as bodyParser from 'body-parser';
import * as schema from './schema';

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

    router.use('/', graphqlHTTP({
      schema: schema,
      graphiql: true,
      pretty: true,
    }));

    this.express.use('/', router);
  }

}

export default new Server().express;