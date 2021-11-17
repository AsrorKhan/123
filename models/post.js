const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: {
        type: 'string',
        required: true
    },
    title: {
        type: 'string',
        required: true
    },
    author: {
        type: 'string',
        required: true
    },
}, {timestamps: true})


const Post = mongoose.model('Post', postSchema);

module.exports = Post;