import start from './server';

process.on('uncaughtException', function(err) {  
  console.error('Unhandled Exception', err);
});
process.on('unhandledRejection', function(err, promise){  
  console.error('Unhandled Rejection', err);
});

start({port: process.env.PORT});