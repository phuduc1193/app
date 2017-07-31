'use strict';

var express    = require('express'),
    userRouter = express.Router(),
    service    = require('../common/service'),
    passport   = require('../common/passport'),
    jwtOptions  = require('../common/jwt-options'),
    jwt         = require('jsonwebtoken'),
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
    if (data) {
      var payload = {
            name: data.name.first + ' ' + data.name.last,
            nickname: data.nickname,
            status: data.status,
            gender: data.gender,
            email: data.email
          },
          profile = jwt.sign(payload, jwtOptions.secretOrKey);
      return service.response(res, {profile: profile});
    }
    return res.status(200).jsonp({ status: { code: 40410, message: "Please setup your profile"}});
  });
});

userRouter.post('/save', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  var params = req.body;
  var query = { 'auth_id': params.unique },
      update = {
        email: params.email,
        dob: params.dob,
        name: {
          first: params.firstName,
          last: params.lastName,
          middle: params.middleName
        },
        nickname: params.nickname,
        relationship_status: params.status,
        gender: params.gender,
        phones: params.phones,
        addresses: params.addresses
      },
      options = { upsert: true, new: true, setDefaultsOnInsert: true };

  var payload = {
        name: params.firstName + ' ' + params.lastName,
        nickname: params.nickname,
        status: params.status,
        gender: params.gender,
        email: params.email
      },
      token = jwt.sign(payload, jwtOptions.secretOrKey);
  User.findOneAndUpdate(query, update, options, function(error, data) {
    if (error) return next();
    return res.status(200).jsonp({
      status: { code: 200, message: "Profile updated"},
      data: {
        profile: token
      }
    });
  });
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