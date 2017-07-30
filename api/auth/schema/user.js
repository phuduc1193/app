'user strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema,
    BaseSchema      = require('./base'),
    validator       = require('mongoose-unique-validator'),
    db              = require('../common/db');

var UserSchema = new Schema({
  auth_id: { type: Schema.Types.ObjectId, ref: 'auths'},
  email: BaseSchema.email,
  name: BaseSchema.name,
  dob: Date,
  relationship_status: String,
  addresses: [BaseSchema.address],
  organizations: [BaseSchema.organization],
  phones: [BaseSchema.phone],
  relations: [BaseSchema.relation],
  gender: BaseSchema.gender,
  nickname: String,
  introduction: String,
  url: BaseSchema.unique
});

UserSchema.plugin(validator);

module.exports = UserSchema;

var User = db.model('users', UserSchema);

module.exports = User;