'use strict';

var express    = require('express'),
    postRouter = express.Router(),
    service    = require('../common/service'),
    Post       = require('../schema/post');

postRouter.get('/', function(req, res) {
    return res.status(200).send('GET /api/posts received!');
});

module.exports = postRouter;