import * as express from 'express';
import * as cors from 'cors';

var start = (options): any => {

	return new Promise((resolve, reject) => {

		if(!options.db) throw new Error("A server must be started with a connected database.");
		if(!options.port) throw new Error("A server must be started with a port.");

		const app: express.Express = express();

		app.use(cors());

		app.get('/', (req, res, next) => {
			res.status(200).send("Welcome to Resource Service");
		});

		const sequelize = options.db.sequelize();

		require('./routes/country')(app, sequelize);
		require('./routes/state')(app, sequelize);
		require('./routes/gender')(app, sequelize);
		require('./routes/phonetype')(app, sequelize);
		require('./routes/relationshipstatus')(app, sequelize);

		const server = app.listen(options.port, () => {
			resolve(server);
		});

	});
};

export default start;