const Todo = require("../models/todo")

const getTodoList = async (req, res) => {
  try {
    const todos = await Todo.find({})
    res.status(200).json(todos || [])
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" })
  }
}

const addTodo = async (req, res) => {
  const { task, date } = req.body
  try {
    const newTodo = await Todo.create({ task, date })
    res.status(201).json({ newTodo })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" })
  }
}

const toggleTodo = async (req, res) => {
  const { id } = req.params
  try {
    const updatedTodo = await Todo.findById(id)
    updatedTodo.completed = !updatedTodo.completed
    await updatedTodo.save()
    res.status(201).json({ updatedTodo })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" })
  }
}

const deleteTodo = async (req, res) => {
  await Todo.deleteMany({ completed: true })
  const remainingTodos = await Todo.find({})
  res.status(200).json(remainingTodos)
}

module.exports = {
  getTodoList,
  addTodo,
  toggleTodo,
  deleteTodo,
}
