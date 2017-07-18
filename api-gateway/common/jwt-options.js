'use strict';

var passportJWT = require('passport-jwt'),
    ExtractJwt  = passportJWT.ExtractJwt;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = process.env.TOKEN_SECRET;

module.exports = jwtOptions;