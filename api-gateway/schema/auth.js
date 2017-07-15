'user strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    BaseSchema  = require('./base'),
    db          = require('../common/db');

var AuthSchema = new Schema({
  username: BaseSchema.uniqueIdentifier,
  password: String
});

module.exports = AuthSchema;

var Auth = db.model('auths', AuthSchema);

module.exports = Auth;