const db = require('../db')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')

require('dotenv').config()

const authenticate = async (req, res, next) => {

    try {
        //get token stored in cookie
        const token = req.cookies.x_auth
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized!', isAuth: false })
        }

        //decrypt token
        const decoded = jwt.verify(token, process.env.SECRET)

        //find user with _id === decoded.id
        const user = await db.getDb()
            .db()
            .collection('users')
            .findOne({ _id: ObjectId(decoded.id) })

        if(!user) {
            return res.status(401).json({ error: 'Unauthorized', isAuth: false })
        }
        
        //attach user bject to the request
        req.user = user
        next()

    } catch (err) {
        return res.status(500).json({isAuth: false, err})
    }
}

module.exports = { authenticate }