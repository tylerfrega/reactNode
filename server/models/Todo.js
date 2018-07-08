const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: String
})


const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;