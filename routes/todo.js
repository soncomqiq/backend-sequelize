const router = require('express').Router();
const passport = require('passport');
const todoController = require("../controllers/todo");

const auth = passport.authenticate("jwt", { session: false });

router.get("/", auth, todoController.getAllTodos);
router.get("/:id", auth, todoController.getTodosById);
router.post("/", auth, todoController.createTodo);
router.put("/:id", auth, todoController.updateTodo);
router.delete("/:id", auth, todoController.deleteTodo);

module.exports = router;