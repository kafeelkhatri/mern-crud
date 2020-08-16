const express = require("express");
const router = express.Router();
let User = require("../models/User");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const jobName = req.body.jobName;
  const age = Number(req.body.age);

  const newUser = new User({
    username,
    jobName,
    age,
  });
  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/update/:id", (req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      users.username = req.body.username;
      users.jobName = req.body.jobName;
      users.age = Number(req.body.age);
      users
        .save()
        .then(() => res.json("User Updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
