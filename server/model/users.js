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


const Users = mongoose.model('Users', userSchema)


module.exports = Users