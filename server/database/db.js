const express = require("express");
const env = require("dotenv");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

env.config({ path: "./config.env" });

app.use(bodyparser.json());

// Mongodb connection
mongoose.connect(
  process.env.DB_CONN_URL,
  {})
    .then((result) => {
      console.log("CONNECTION SUCCESSFULLY🤗");
    })
    .catch((err) => {
      console.log("CONNECTION FAILED😢:" + err.message);
    });


// login route
app.get("/login", (req, res) => {
  res.status(200).json({
    status: 200,
    text: "hello ",
  });
});

// server
app.listen(5000, () => {
  console.log("server is running....");
});
