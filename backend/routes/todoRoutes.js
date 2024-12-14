const express = require("express");
const  { createTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const router = express.Router();


router.post("/todos" , createTodo);
router.get("/get" , getTodo);
router.put("/todos/:id" , updateTodo);
router.delete("/todo/:id" , deleteTodo)


module.exports = router;