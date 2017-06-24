const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  completed: {
    type: Boolean,
    required: false
  },
  description: {
    type: String,
    required: true
  }
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
