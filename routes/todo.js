const express = require('express')

const {
  getTodoList,
  addTodo,
  toggleTodo,
  deleteTodo,
} = require('../controllers/todo.js')

const router = express.Router()

router.get('/', getTodoList)
router.post('/', addTodo)
router.patch('/:id', toggleTodo)
router.delete('/', deleteTodo)

module.exports = router
