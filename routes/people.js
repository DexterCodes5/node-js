const express = require("express")
const router = express.Router()


const peopleController = require("../controllers/people")

router.get("/", peopleController.getPeople)

router.post("/", peopleController.postPerson)

router.post("/postman", peopleController.postPersonPostman)

router.put("/:id", peopleController.putPerson)

router.delete("/:id", peopleController.deletePerson)

// router.route("/").get(peopleController.getPeople).post(peopleController.postPerson)
// router.route("/postman").post(peopleController.postPersonPostman)
// router.route("/:id").post(peopleController.putPerson).delete(peopleController.deletePerson)

module.exports = router