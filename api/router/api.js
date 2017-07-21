'use strict';

var express     = require('express'),
    router      = express.Router();

var authRouter  = require('./auth'),
    userRouter  = require('./user');

router.get('/', function(req, res) {
  return res.status(301).redirect('/');
});

router.use('/auth', authRouter);
router.use('/users', userRouter);

// export our router middleware
module.exports = router;