const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
//to get addition feedback to endpoints
app.use(morgan("tiny"));

app.use(router);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});