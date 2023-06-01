const express = require("express");
const router = express.Router();
const { getAllTodos, createTodo, getTodosByPriority, editTodo, deleteTodo, deleteAll } = require("../controller/todoController");

router.get("/all-todos", getAllTodos);
router.post("/new-todo", createTodo);
router.get("/todo-by-priority/:priority", getTodosByPriority);
router.put("/editTodo/:id", editTodo )
router.delete("/deleteTodo/:id", deleteTodo)
router.delete("/deleteAll", deleteAll)

module.exports = router;