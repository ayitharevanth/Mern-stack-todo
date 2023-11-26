const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn.js");
const { readTodos, createTodo, updateTodo, deleteTodo } = require("./routes/todos.js");

const router = express.Router();

router.post("/login", require("./routes/auth.js"));

router.get("/todos", isLoggedIn, readTodos);
router.post("/todos", isLoggedIn, createTodo);
router.put("/todos/:id", isLoggedIn, updateTodo);
router.delete("/todos/:id", isLoggedIn, deleteTodo);

module.exports = router;
