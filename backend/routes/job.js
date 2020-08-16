const express = require("express");
const router = express.Router();
let Job = require("../models/Job");

router.get("/", (req, res) => {
  Job.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
});

router.post("/add", (req, res) => {
  const jobName = req.body.jobName;
  const newJob = new Job({ jobName });
  newJob
    .save()
    .then(() => res.json("Job added !"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
