'use strict';

var express     = require('express'),
    mongoose    = require('mongoose'),
    posts       = express.Router();

//DB setup
mongoose.connect('mongodb://mongo:27017', { useMongoClient: true });

posts.get('/', function(req, res) {
    return res.status(200).send('GET /api/posts received!');
});

module.exports = posts;