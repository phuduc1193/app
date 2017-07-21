'user strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    BaseSchema  = require('./base'),
    validator   = require('mongoose-unique-validator'),
    db          = require('../common/db');

var AuthSchema = new Schema({
  username: BaseSchema.uniqueIdentifier,
  password: String,
  token: String
});

AuthSchema.plugin(validator);

module.exports = AuthSchema;

var Auth = db.model('auths', AuthSchema);

module.exports = Auth;