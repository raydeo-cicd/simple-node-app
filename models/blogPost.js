const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema ({

    title: String,
    body: String

});

// we set a mongoose model on blogPost passing in the blogPostSchema
const blogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = blogPost;