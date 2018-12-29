const express = require('express')
const router = express.Router()

//controller
const userController = require('../controllers/userController')

//middlewares
const { validateBody, schemas } = require('../middlewares/validate')
const { authenticate }  = require('../middlewares/authenticate')

//@ POST 'api/users/register'
//@ Desc Register a new user
//PUBLIC route
router.post('/register', validateBody(schemas.registerSchema), userController.registerUser)

//@ POST 'api/users/login'
//@ Desc Log in a user
//PUBLIC route
router.post('/login', validateBody(schemas.loginSchema), userController.loginUser)

//@ GET 'api/users/auth'
//@ Desc Fetch current user
//PRIVATE route
router.get('/auth', authenticate, userController.authUser)

//@ GET 'api/users/logout'
//@ Desc Logout current user
//PRIVATE route
router.get('/logout', authenticate, userController.logoutUser)

module.exports = router
