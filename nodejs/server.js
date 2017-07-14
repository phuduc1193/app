var express = require('express');
var app = express();

var mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://mongo:27017', { useMongoClient: true });

app.get('/', function(req, res){
  res.send("This is the API entrypoint");
});

app.listen(3000, function(){
  console.log('API Server is listening on port 3000!');
});