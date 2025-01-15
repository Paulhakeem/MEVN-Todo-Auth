const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
    select: false
  }
});


// encrypt password
userSchema.pre('save', async function(next){
this.password = await bcrypt.hash(this.password, 12)
next()
})


const Users = mongoose.model('Users', userSchema)


module.exports = Users