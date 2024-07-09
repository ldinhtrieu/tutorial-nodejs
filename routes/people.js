const express = require("express");

const router = express.Router();

const {
  getPeople,
  createPeople,
  createPeoplePostman,
  edit,
  deletePeople,
} = require("../controllers/people");

router.get("/", getPeople).post(createPeople);

// router.post("/", createPeople);

// router.post("/postman", createPeoplePostman);

// router.put("/:id", edit);

// router.delete("/:id", deletePeople);

module.exports = router;
