import connect from './model';
import start from './server';

process.on('uncaughtException', function(err) {  
  console.error('Unhandled Exception', err);
});
process.on('unhandledRejection', function(err, promise){  
  console.error('Unhandled Rejection', err);
});

const connectionString ='postgres://postgres:'+ process.env.DATABASE_PASSWORD +'@'+ process.env.DATABASE_HOST +'/postgres';

connect(connectionString).then((dbConnection) => {
  console.log("Connected. Starting server...");

  return start({
    port: process.env.PORT,
    db: dbConnection
  });

}).then((app) => {
  console.log("Server started successfully, running on port " + process.env.PORT + ".");
  app.on('close', () => {
    app.db.disconnect();
  });
});