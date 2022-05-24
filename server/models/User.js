const { Schema, model } = require('mongoose');
const Post = require('./Post');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    bio: {
        type: String,
        max: 50,
    },
  }, { timestamps: true }
);

const User = model('User', userSchema);

module.exports = Post;