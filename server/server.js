const express = require('express')
const db = require('./db')
const PORT = process.env. PORT || 5000

require('dotenv').config()


//init app
const app = express()

//connect to MongoDB
db.initDb((err, db) => {
    if(err) {
        console.log(err)
    } else {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }
})

