const router = require("express").Router();
const personController = require("../controllers/person");

router.get("/", personController.getAllPersons);
router.get("/:id", personController.getPersonById);
router.post("/", personController.createPerson);
router.put("/:id", personController.updatePerson);
router.delete("/:id", personController.deletePerson);

module.exports = router;