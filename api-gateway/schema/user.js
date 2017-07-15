'user strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    BaseSchema  = require('./base'),
    db          = require('../common/db');

var UserSchema = new Schema({
  username: BaseSchema.uniqueIdentifier,
  primaryEmail: BaseSchema.email,
  name:   BaseSchema.name,
  addresses: [BaseSchema.address],
  organizations: [BaseSchema.organization],
  phones: [BaseSchema.phone],
  relations: [BaseSchema.relation],
  gender: BaseSchema.gender
});

module.exports = UserSchema;

var User = db.model('users', UserSchema);

module.exports = User;