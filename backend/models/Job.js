const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    jobName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
