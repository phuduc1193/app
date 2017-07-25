'user strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema,
    BaseSchema      = require('./base'),
    validator       = require('mongoose-unique-validator'),
    db              = require('../common/db');

var UserSchema = new Schema({
  auth_id: { type: Schema.Types.ObjectId, ref: 'auths'},
  email: BaseSchema.email,
  name:   BaseSchema.name,
  address: [BaseSchema.address],
  organization: [BaseSchema.organization],
  phone: [BaseSchema.phone],
  relation: [BaseSchema.relation],
  gender: BaseSchema.gender,
  introduction: String,
  url: BaseSchema.unique
});

UserSchema.plugin(validator);

module.exports = UserSchema;

var User = db.model('users', UserSchema);

module.exports = User;