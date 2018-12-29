const passport = require('passport')
const AmazonStrategy = require('passport-amazon').Strategy
const jwt = require('jsonwebtoken')

const db = require('../../db')

require('dotenv').config()


passport.use(new AmazonStrategy({
    clientID: process.env.AMAZON_CLIENT_ID, 
    clientSecret: process.env.AMAZON_CLIENT_SECRET,
    callbackURL: '/auth/amazon/callback'
},
    async (accessToken, refreshToken, profile, done) => {

        try {

            //is there an existing user in db with this google ID?
            let user = await db
                .getDb()
                .db()
                .collection('users')
                .findOne({ "amazon.id": profile._json.user_id })

            if (!user) {
                user = {
                    amazon: {
                        id: profile._json.user_id,
                        email: profile._json.email,
                        fullname: profile._json.name
                    },
                    role: 'default',
                    cart: [],
                    wishlist: [],
                    history: [],
                    reviews: [],
                    avatar: ''
                }
                //save new user to db
                const userDoc = await db
                    .getDb()
                    .db()
                    .collection('users')
                    .insertOne(user)
                //retrieve the user
                user = await db
                    .getDb()
                    .db()
                    .collection('users')
                    .findOne({ _id: userDoc.ops[0]._id })
                //generate token
                const token = await jwt.sign({id: user._id}, process.env.SECRET, { expiresIn: '6h' })
                //attach token to the request
                user.token = token
                done(null, user)
            }

            const token = await jwt.sign({id: user._id}, process.env.SECRET, { expiresIn: '6h' })
            //attach token to the request
            user.token = token
            done(null, user)

        } catch (err) {
            done(err, null)
        }
    }
))