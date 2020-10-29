const router = require("express").Router();
const userControllers = require("../controllers/user");

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);

module.exports = router;