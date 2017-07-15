'use strict';

var express     = require('express'), 
    path        = require('path'),
    bodyParser  = require('body-parser');

var app = express();

var apiRouter = require('./router/api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index.html');
});

app.use('/api', apiRouter);

app.listen(3000, function(){
  console.log('API Server is listening on port 3000!');
});