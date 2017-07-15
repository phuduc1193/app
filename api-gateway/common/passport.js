'user strict';

var passport    = require('passport'),
    passportJWT = require('passport-jwt'),
    JwtStrategy = passportJWT.Strategy,
    jwtOptions  = require('./jwt-options'),
    Auth        = require('../schema/auth');

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  Auth.findById(jwt_payload.id, function(err, data) {
    if (err) {
      return next(err, false);
    }
    if (data) {
      next(null, data);
    } else {
      next(null, false);
    }
  });
});

passport.use(strategy);

module.exports = passport;