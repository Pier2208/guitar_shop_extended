const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = {

    registerUser: async (req, res) => {

        try {
            //get data from register from
            const { firstname, lastname, email, password } = req.body

            //check if email not already in dababase
            const existingDoc = await db.getDb()
                .db()
                .collection('users')
                .findOne({ email })

            if(existingDoc) {
                return res.status(400).json({ email: 'Email already in use' })
            }

            //encrypt password
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            
            //create new user
            const newUser = {
                firstname,
                lastname,
                email,
                password: hash
            }

            //save new user
            //we get back a user document on which data lives in .ops
            const userDoc = await db.getDb()
                .db()
                .collection('users')
                .insertOne(newUser)

            //generate token
            const payload = { id: userDoc.ops[0]._id}
            const options = { expiresIn: '6h' }
            const token = await jwt.sign(payload, process.env.SECRET, options)
            
            //store token in cookie
            res.cookie('x_auth', token).status(200).json({success: 'user registered'})

        } catch (err) {
            return res.status(500).json({error: 'Creating the user account failed', err})
        }
    }
}