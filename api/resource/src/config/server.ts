const express = require('express'),
      cors    = require('cors');

module.exports.start = (options) => {

  return new Promise((resolve, reject) => {

    if(!options.repository) throw new Error("A server must be started with a connected repository.");
    if(!options.port) throw new Error("A server must be started with a port.");

    const app = express();
    app.use(cors());

    require('../api/countries')(app, options);
    require('../api/common')(app, options);

    const server = app.listen(options.port, () => {
      resolve(server);
    });

  });
};