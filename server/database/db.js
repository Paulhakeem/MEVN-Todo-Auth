const express = require("express");
const env = require("dotenv");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const createUser = require('./../routers/authRoutes')
const cors = require('cors')
const helment = require('helmet')

const app = express();

env.config({ path: "./config.env" });

app.use(bodyparser.json());
app.use(cors())
app.use(helment())

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
app.use("/todo", createUser)


// server
app.listen(5000, () => {
  console.log("server is running....");
});
