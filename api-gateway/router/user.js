'use strict';

var express     = require('express'),
    users      = express.Router();

users.get('/', function(req, res) {
    return res.status(200).send('GET /api/users received!');
});

module.exports = users;