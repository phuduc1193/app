'use strict';

var express     = require('express'),
    router      = express.Router();

var authRouter  = require('./auth'),
    userRouter  = require('./user');

router.use('/', authRouter);
router.use('/users', userRouter);

// export our router middleware
module.exports = router;