'use strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

var service     = require('../common/service');

var BaseSchema = {
  name: new Schema({
    givenName: {type: String},
    familyName: {type: String}
  }),
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [service.validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  address: new Schema({
    type: {type: String},
    customType: {type: String},
    streetAddress: {type: String},
    locality: {type: String},
    region: {type: String},
    postalCode: {
      type: String,
      minlength: 3,
      maxlength: 10
    }
  }),
  organization: new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    title: String,
    primary: Boolean,
    type: {
      type: String,
      enum: ['Work', 'School', 'University', 'Other']
    },
    startDate: Date,
    endDate: Date
  }),
  phone: new Schema({
    value: {
      type: String,
      validate: {
          validator: function(v) {
              var re = /^\d{10}$/;
              return (v == null || v.trim().length < 1) || re.test(v)
          },
          message: 'Provided phone number is invalid.'
      }
    },
    type: {
      type: String,
      enum: ['Work', 'Home', 'Mobile', 'Other']
    }
  }),
  relation: new Schema({
    _id: Schema.Types.ObjectId,
    value: {
      type: String,
      enum: ['Colleague', 'Father', 'Mother', 'Sibling', 'Cousin', 'Spouse', 'Child', 'Grandchild', 'Grand-father', 'Grand-mother', 'Father-in-law', 'Mother in-law', 'Brother-in-law', 'Sister in-law']
    },
    customType: String
  }),
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  uniqueIdentifier: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Unique Identifier is required'
  }
};

module.exports = BaseSchema;