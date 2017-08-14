import * as express from 'express';

var start = (options): any => {

	return new Promise((resolve, reject) => {

		if(!options.port) throw new Error("A server must be started with a port.");

		const sequelize = options.db.sequelize();

		return;
	});
};

export default start;