'use strict';

var express     = require('express'),
    router      = express.Router();

var userRouter  = require('./user');
var postRouter  = require('./post');

router.get('/', function(req, res) {
  return res.status(301).redirect('/');
});

router.use('/users', userRouter);
router.use('/posts', postRouter);

// export our router middleware
module.exports = router;