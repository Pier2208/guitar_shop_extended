const express = require('express')
const router = express.Router()

//controller
const userController = require('../controllers/userController')

//@ POST 'api/users/register'
//@ Desc Register a new user
//PUBLIC route
router.post('/register', userController.registerUser)

//@ POST 'api/users/login'
//@ Desc Log in a user
//PUBLIC route
router.post('/login', userController.loginUser)


module.exports = router
