'use strict';

var express     = require('express'),
    userRoutes  = express.Router(),
    db          = require('../common/db'),
    userSchema  = require('../schema/user');

var User        = db.model('users', userSchema);

userRoutes.get('/', function(req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = userRoutes;