'use strict';

var express    = require('express'),
    userRouter = express.Router(),
    service    = require('../common/service'),
    passport   = require('../common/passport'),
    User       = require('../schema/user');

userRouter.get('/', function (req, res, next) {
  User.find({}, function (err, data) {
    if (err)
      return next();
    return service.response(res, data);
  });
});

userRouter.post('/profile', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  User.findOne({ 'auth_id': req.body.unique }, function (err, data) {
    if (err)
      return next();
    if (data)
      return service.response(res, data);
    return res.status(200).jsonp({ status: { code: 40410, message: "Please setup your profile"}});
  });
});

userRouter.post('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  
});

userRouter.put('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  
});

userRouter.delete('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  
});

userRouter.get('/:email', function (req, res, next) {
  User.findOne({
    'email': req.params.email
  }, function (err, data) {
    if (err)
      return next();
    return service.response(res, data);
  });
});

module.exports = userRouter;