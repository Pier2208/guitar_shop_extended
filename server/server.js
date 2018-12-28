const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

//init app
const app = express()

//connect to MongoDB
const db = require('./db')
const PORT = process.env. PORT || 5000

db.initDb((err, db) => {
    if(err) {
        console.log(err)
    } else {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }
})

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//routes
app.use('/api/users', require('./routes/userRoutes'))

