'use strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

var service     = require('../common/service');

var BaseSchema = {
  name: new Schema({
    first: {type: String, required: true},
    last: {type: String, required: true},
    middle: {type: String}
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
    custom_type: {type: String},
    street: {type: String},
    locality: {type: String},
    region: {type: String},
    postal_code: {
      type: String,
      minlength: 3,
      maxlength: 10
    }
  }),
  organization: new Schema({
    _id: { type: Schema.Types.ObjectId, ref: 'organizations' },
    name: String,
    title: String,
    primary: Boolean,
    type: {
      type: String,
      enum: ['Work', 'School', 'University', 'Other']
    },
    start_date: Date,
    end_date: Date
  }),
  phone: new Schema({
    value: {
      type: String,
      validate: {
          validator: function(string) {
              var regex = /^\d{10}$/;
              return (string == null || string.trim().length < 1) || regex.test(string)
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
    _id: { type: Schema.Types.ObjectId, ref: 'users'},
    value: {
      type: String,
      enum: ['Colleague', 'Father', 'Mother', 'Sibling', 'Cousin', 'Spouse', 'Child', 'Grandchild', 'Grand-father', 'Grand-mother', 'Father-in-law', 'Mother in-law', 'Brother-in-law', 'Sister in-law']
    },
    type: String
  }),
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  unique: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Unique field is required'
  }
};

module.exports = BaseSchema;