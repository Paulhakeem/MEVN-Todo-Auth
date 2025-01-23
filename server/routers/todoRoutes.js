const express = require('express')
const todo  = require('../function/todoControler')


const router = express.Router()

router.route('/add-todo').post(todo.createTodo)
router.route('/delete-todo/:id').delete(todo.deleteTodo)


module.exports = router