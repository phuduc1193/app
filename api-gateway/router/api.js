'use strict';

var express     = require('express'),
    router      = express.Router();

var userRoute   = require('./user');

// GET / route
router.get('/', function(req, res) {
  return res.status(301).redirect('/');
});

router.use('/users', userRoute);

// export our router middleware
module.exports = router;