const mongoose = require('mongoose');
const { Schema } = mongoose;
const todos = require('./Todo')

const userSchema = new Schema({
    googleId: String,

    todos:[{
        type: Schema.Types.ObjectId,
        required: false,
        ref: "todos"
    }]
})


const User = mongoose.model('users', userSchema);

module.exports = User;