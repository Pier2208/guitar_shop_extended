const express = require('express')
const MongoClient = require('mongodb').MongoClient

require('dotenv').config()


//init app
const app = express()


//mongoDB connect
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true })
client.connect()
    .then( client => console.log('Connected to mongoDB'))
    .catch(err => console.log('Something webt wrong', err))
client.close()


//listening to
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})