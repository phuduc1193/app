import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as graphqlHTTP from 'express-graphql';

import graphQLSchema from './schema';

const start = (options) => {

	return new Promise((resolve, reject) => {

		if(!options.port) throw new Error("A server must be started with a port.");

		const app: express.Express = express();

		app.use(cors());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());

		app.get('/', graphqlHTTP({
			schema: graphQLSchema,
			graphiql: true
		}));
		app.post('/', graphqlHTTP({
			schema: graphQLSchema
		}));

		const server = app.listen(options.port, () => {
			console.log("GraphQL Server started successfully, running on port " + process.env.PORT + ".");
			resolve(server);
		});

	});
};

export default start;