'user strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    BaseSchema  = require('./base'),
    validator   = require('mongoose-unique-validator'),
    db          = require('../common/db');

var OrganizationSchema = new Schema({
  name: BaseSchema.unique,
  short_name: String,
  address: [BaseSchema.address],
  email: [BaseSchema.email],
  phone: BaseSchema.phone
});

OrganizationSchema.plugin(validator);

module.exports = OrganizationSchema;

var Organization = db.model('organizations', OrganizationSchema);

module.exports = Organization;