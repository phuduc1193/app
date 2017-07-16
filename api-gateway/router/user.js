'use strict';

var express    = require('express'),
    userRouter = express.Router(),
    service    = require('../common/service'),
    passport   = require('../common/passport'),
    User       = require('../schema/user');

userRouter.get('/', function (req, res, next) {
  User.find({}, function (err, data) {
    if (err)
      next();
    return service.response(res, data);
  });
});

userRouter.get('/:username', function (req, res, next) {
  User.findOne({
    'username': req.params.username
  }, function (err, data) {
    if (err)
      next();
    return service.response(res, data);
  });
});

userRouter.post('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  
});

userRouter.put('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  
});

userRouter.delete('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  
});

module.exports = userRouter;