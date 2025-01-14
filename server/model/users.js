const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },

  password: {
    type: String,
    required: [true, "Please enter your password"]
  }
});


const user = mongoose.model('Users', userSchema)


module.exports = user