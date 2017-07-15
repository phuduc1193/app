'use strict';

var passportJWT = require('passport-jwt'),
    ExtractJwt  = passportJWT.ExtractJwt;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'qwert1234';

module.exports = jwtOptions;