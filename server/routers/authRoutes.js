const newUser = require("../controllers/signup")
const login = require("./../controllers/login")
const express = require('express')

const router = express.Router()

router.route('/signup').post(newUser.createUser)
router.route('/login').post(login.loginUser)


module.exports = router