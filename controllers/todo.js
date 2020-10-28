const db = require("../models");

const getAllTodos = async (req, res) => {
  const allTodos = await db.Todo.findAll();
  res.status(200).send(allTodos);
};

const getTodosById = async (req, res) => {
  const targetId = req.params.id;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });
  res.status(200).send(targetTodo);
};

const createTodo = async (req, res) => {
  const { task } = req.body;
  const newTodo = await db.Todo.create({ task });
  res.status(201).send(newTodo);
};

const updateTodo = async (req, res) => {
  const targetId = req.params.id;
  const { task } = req.body;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

  if (targetTodo) {
    targetTodo.update({ task });
    res.status(200).send({ message: `Todo ID: ${targetId} has been updated.` });
  } else {
    res.status(404).send({ message: `Not found ID: ${targetId}` });
  }
};

const deleteTodo = async (req, res) => {
  const targetId = req.params.id;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

  if (targetTodo) {
    targetTodo.destroy();
    res.status(200).send({ message: `Todo ID: ${targetId} has been deleted.` });
  } else {
    res.status(404).send({ message: `Not found ID: ${targetId}` });
  }
};

module.exports = {
  getAllTodos,
  getTodosById,
  createTodo,
  updateTodo,
  deleteTodo
};