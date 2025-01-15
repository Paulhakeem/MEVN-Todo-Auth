const newUser = require("./../controllers/auth/signup")
const express = require('express')

const router = express.Router()

router.route('/signup').post(newUser.createUser)


module.exports = router