const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const jobRouter = require("./routes/job");
const userRouter = require("./routes/user");

app.use("/job", jobRouter);
app.use("/user", userRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connected");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
