const TodoModel = require("../models/todo");

const readTodos = async (req, res) => {
  const todos = await TodoModel.find();
  res.send(todos);
};

const createTodo = async (req, res) => {
  const { text } = req.body;
  const todo = new TodoModel({
    text,
    
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};

const updateTodo = async (req, res) => {
  const updatedTodo = await TodoModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updatedTodo);
};

const deleteTodo = async (req, res) => {
  await TodoModel.findByIdAndDelete(req.params.id);
  res.status(204).json("Todo has been deleted.");
};

module.exports = { readTodos, createTodo, updateTodo, deleteTodo };