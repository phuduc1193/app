var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    BaseSchema  = require('../common/schema');

var userSchema = new Schema({
  username: BaseSchema.uniqueIdentifier,
  primaryEmail: BaseSchema.email,
  name:   BaseSchema.name,
  addresses: [BaseSchema.address],
  organizations: [BaseSchema.organization],
  phones: [BaseSchema.phone],
  relations: [BaseSchema.relation],
  gender: BaseSchema.gender
});

module.exports = userSchema;