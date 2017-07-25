'use strict';

var express     = require('express'),
    authRouter  = express.Router(),
    service     = require('../common/service'),
    db          = require('../common/db'),
    Auth        = require('../schema/auth'),
    User        = require('../schema/user'),
    jwtOptions  = require('../common/jwt-options'),
    jwt         = require('jsonwebtoken'),
    passport    = require('../common/passport'),
    bcrypt      = require('bcrypt-nodejs');


authRouter.post('/login', function (req, res, next) {
  if(!req.body.username || !req.body.password){
    return res.status(401).json({
      status: {
        code: 40100,
        message: "Missing login"
      }
    });
  }

  Auth.findOne({
    'username': req.body.username
  }, function (err, data) {
    if (err){
       return res.status(401).json({
        status: {
          code: 40101,
          message: "No username matched"
        }
      });
    }

    if (data == null || data.length == 0)
      return service.response(res, data);

    bcrypt.compare(req.body.password, data.password, function (err, isSuccess) {
      if (isSuccess) {
        var payload = service.jwtClaims(data._id);
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        return res.status(200).json({
          status: {
            code: 200,
            message: 'Success'
          },
          data: {
            access_token: token,
            refresh_token: data.token
          }
        });
      } else {
        return res.status(401).json({
          status: {
            code: 40102,
            message: "Wrong password"
          }
        });
      }
    });
  });
});

authRouter.post('/refresh', function(req, res, next) {
  if(!req.body.refresh_token && !req.body.sub){
    return res.status(400).json({
      status: {
        code: 40010,
        message: "Missing information"
      }
    });
  }
  Auth.findOne({
    '_id': req.body.sub,
    'token': req.body.refresh_token
  }, function (err, data) {
    if (err){
       return res.status(401).json({
        status: {
          code: 40110,
          message: "Bad credential"
        }
      });
    }

    if (data == null || data.length == 0)
      return service.response(res, data);

    var payload = service.jwtClaims(data._id);
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    return res.status(204).json({
      status: {
        code: 20410,
        message: 'Token updated'
      },
      data: {
        access_token: token
      }
    });
  });
});

authRouter.post('/register', function (req, res, next) {
  bcrypt.hash(req.body.password, null, null, function (err, hash) {
    var user = new Auth({
      username: req.body.username,
      password: hash,
      token: service.guid()
    });
    user.save(function (err, data) {
      if (err) {
        if(err.name == 'ValidationError')
          return res.status(400).json({
             status: {
              code: 40000,
              message: 'Username taken'
            }
          });
        return next();
      }
      var payload = service.jwtClaims(data._id);
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      return res.status(201).json({
        status: {
          code: 201,
          message: 'Created'
        },
        data: {
          access_token: token,
          refresh_token: data.token
        }
      });
    });
  });
});

authRouter.get('/token', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  return res.status(200).json({
    status: {
      code: 200,
      message: 'OK'
    }
  });
});

module.exports = authRouter;