var mongoose = require('mongoose');

//DB setup
var db = mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;