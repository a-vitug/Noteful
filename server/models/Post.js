const { Schema, model } = require('mongoose')

const postSchema = new Schema(
    {
    username: {
        type: String,
        require: true,
        trim: true
    },
    comments: [{
        commentText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    }],
    image: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    },
    }, { timestamps: true }
);

const Post = model('Post', postSchema);

module.exports = Post;