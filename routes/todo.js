const router = require('express').Router();
const todoController = require("../controllers/todo");

router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodosById);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;