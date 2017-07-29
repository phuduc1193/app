'use strict';

var express     = require('express'), 
    path        = require('path'),
    bodyParser  = require('body-parser'),
    passport    = require('./common/passport'),
    apiRouter   = require('./router/api'),
    cors        = require('cors'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
app.options('*', cors());

app.get('/auth/docs', function(req, res){
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
});

app.use('/auth', apiRouter);

app.listen(3000, function(){
  console.log('API Server is listening on port 3000!');
});