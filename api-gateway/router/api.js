'use strict';

var express     = require('express'),
    router      = express.Router();

var authRouter  = require('./auth'),
    userRouter  = require('./user'),
    postRouter  = require('./post');

router.get('/', function(req, res) {
  return res.status(301).redirect('/');
});

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);

// export our router middleware
module.exports = router;