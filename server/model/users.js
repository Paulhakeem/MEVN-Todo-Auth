const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail]
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



// compare password for login user
userSchema.methods.comparePassword = async function(userPassword){
return await bcrypt.compare(userPassword, this.password)
}

const Users = mongoose.model('Users', userSchema)


module.exports = Users