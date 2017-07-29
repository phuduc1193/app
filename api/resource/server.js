'use strict';

var express     = require('express'), 
    path        = require('path'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get('/resource/country')

app.listen(3000, function(){
  console.log('API Server is listening on port 3000!');
});