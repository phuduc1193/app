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
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index.html');
});

app.use('/api', apiRouter);

app.listen(3000, function(){
  console.log('API Server is listening on port 3000!');
});