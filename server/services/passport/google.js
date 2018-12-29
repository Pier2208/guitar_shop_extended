const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const jwt = require('jsonwebtoken')

const db = require('../../db')

require('dotenv').config()

//passport middleware
passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {

        try {
            //is there an existing user in db with this google ID?
            let user = await db
                .getDb()
                .db()
                .collection('users')
                .findOne({ "google.id": profile.id })

            if (!user) {
                user = {
                    google: {
                        id: profile.id,
                        email: profile.emails[0].value,
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName
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