'use strict';

var express     = require('express'),
    authRouter  = express.Router(),
    service     = require('../common/service'),
    db          = require('../common/db'),
    Auth        = require('../schema/auth'),
    jwtOptions  = require('../common/jwt-options'),
    jwt         = require('jsonwebtoken'),
    bcrypt      = require('bcrypt-nodejs');

authRouter.post('/login', function (req, res, next) {
  if(!req.body.username || !req.body.password){
    return res.status(401).json({
      response: {
        status: 401,
        message: "Unauthorized.. Missing login info"
      }
    });
  }
  
  Auth.findOne({
    'username': req.body.username
  }, function (err, data) {
    if (err){
       return res.status(401).json({
        response: {
          status: 401,
          message: "Unauthorized.. Missing login info"
        }
      });
    }
    if (data == null || data.length == 0)
      return service.response(res, data);

    bcrypt.compare(req.body.password, data.password, function (err, isSuccess) {
      if (isSuccess) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = {id: data._id.toString()};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.status(200).json({
          response: {
            status: 200,
            message: 'Success'
          },
          token: token
        });
      } else {
        return res.status(401).json({
          response: {
            status: 401,
            message: "Unauthorized.. Missing login info"
          }
        });
      }
    });
  });
});

authRouter.post('/register', function (req, res, next) {
  bcrypt.hash(req.body.password, null, null, function (err, hash) {
    var user = new Auth({
      username: req.body.username,
      password: hash
    });
    user.save(function (err) {
      if (err)
        next();
      res.status(201).json({
        response: {
          status: 201,
          message: 'Successfully created'
        }
      });
    });
  });
});

module.exports = authRouter;