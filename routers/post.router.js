const express = require('express');
const router = express.Router();
const Todo = require('../models/post.model.js');

router.get('/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: todos
      });
    }
  });
});

router.get('/todos/:todoId', (req, res) => {
  Todo.find({_id: req.params.todoId}, (err, todos) => {
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        todos: todos
      });
    }
  });
});

router.post('/todos', (req, res) => {
  let todo = new Todo(req.body);
  todo.save(err => {
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Successfully created new todo'
      });
    }
  });
});

router.put('/todos/:todoId', (req, res) => {
  Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, (err, todo) => {
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Succesfully updated'
      });
    }
  });
});

router.delete('/todos/:todoId', (req,res) => {
  Todo.remove({_id: req.params.todoId}, err => {
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: 'Succesfully deleted'
      });
    }
  });
});

module.exports = router;
