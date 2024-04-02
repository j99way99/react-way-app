/**
 * Todo
 */
const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    text : {
        type: String,
        trim: true,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};
