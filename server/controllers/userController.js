const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = {

    registerUser: async (req, res) => {

        try {

            if (req.errors)
                return res.status(400).json(req.errors)

            //get data from register form
            const { firstname, lastname, email, password, newsletter } = req.body

            //check if email not already in dababase
            const existingDoc = await db.getDb()
                .db()
                .collection('users')
                .findOne({ 'local.email': email })

            if (existingDoc) {
                return res.status(400).json({ email: 'Email already in use' })
            }

            //encrypt password
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)

            //create new user
            const newUser = {
                local: {
                    firstname: firstname.trim(),
                    lastname: lastname.trim(),
                    email: email.toLowerCase().trim(),
                    password: hash
                },
                newsletter,
                role: 'default',
                cart: [],
                wishlist: [],
                history: [],
                reviews: []
            }

            //save new user
            //we get back a user document on which data lives in .ops
            const userDoc = await db.getDb()
                .db()
                .collection('users')
                .insertOne(newUser)

            //generate token
            const payload = { id: userDoc.ops[0]._id }
            const options = { expiresIn: '6h' }
            const token = await jwt.sign(payload, process.env.SECRET, options)

            //store token in cookie
            res.cookie('x_auth', token).status(200).json(true)

        } catch (err) {
            return res.status(500).json({ error: 'An error occured during the creation of the account' })
        }
    },

    registerUserViaLogin: async (req, res) => {

        try {

            if (req.errors)
                return res.status(400).json(req.errors)

            //verify that email is not already in database
            const existingDoc = await db.getDb()
                .db()
                .collection('users')
                .findOne({ 'local.email': req.body.email.toLowerCase().trim() })

            if (existingDoc) {
                return res.status(400).json({ email: 'Email already in use' })
            }

            return res.status(200).json({ email: req.body.email })

        } catch (err) {
            return res.status(500).json({ error: 'An error occured' })
        }
    },

    loginUser: async (req, res) => {

        if (req.errors)
            return res.status(400).json(req.errors)

        try {
            //get data from login form
            const { email, password } = req.body

            //verify that user has registered an account
            const existingDoc = await db.getDb()
                .db()
                .collection('users')
                .findOne({ 'local.email': email.toLowerCase().trim() })

            if (!existingDoc) {
                return res.status(404).json({ email: 'User not found. Please verify your email or create an account.' })
            }

            //compare passwords
            const isMatch = await bcrypt.compare(password, existingDoc.local.password)
            if (!isMatch) {
                return res.status(403).json({ password: 'Password does not match. Please check again.' })
            }
            //generate token
            const payload = { id: existingDoc._id }
            const options = { expiresIn: '6h' }
            const token = await jwt.sign(payload, process.env.SECRET, options)

            //store token in cookie
            res.cookie('x_auth', token).status(200).json(true)

        } catch (err) {
            return res.status(500).json({ message: 'Something went wrong with our server. Please retry to login in a few minutes.' })
        }
    },

    logoutUser: (req, res) => {
        res.clearCookie('x_auth').json({ success: true })
    },

    authUser: (req, res) => {

        res.status(200).json({
            firstname: req.user.local.firstname,
            lastname: req.user.local.lastname,
            email: req.user.local.email,
            role: req.user.role,
            newsletter: req.body.newsletter,
            cart: [],
            wishlist: [],
            history: [],
            reviews: [],
            avatar: ''
        })
    }
}