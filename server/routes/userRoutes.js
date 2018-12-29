const express = require('express')
const router = express.Router()

//controller
const userController = require('../controllers/userController')

//middlewares
const { validateBody, schemas } = require('../middlewares/validate')

//@ POST 'api/users/register'
//@ Desc Register a new user
//PUBLIC route
router.post('/register', validateBody(schemas.registerSchema), userController.registerUser)

//@ POST 'api/users/login'
//@ Desc Log in a user
//PUBLIC route
router.post('/login', validateBody(schemas.loginSchema), userController.loginUser)


module.exports = router
