'user strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    BaseSchema  = require('./base'),
    db          = require('../common/db');

var PostSchema = new Schema({
  
});

module.exports = PostSchema;

var Post = db.model('posts', PostSchema);

module.exports = Post;