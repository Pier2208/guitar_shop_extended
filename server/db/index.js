const MongoClient = require('mongodb').MongoClient

require('dotenv').config()

let _db

//initialize db
const initDb = callback => {
    if(_db) {
        console.log('Database already initialized')
        callback(null, _db)
    }
    MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(client => {
        _db = client
        console.log('Connected to mongoDb')
        callback(null, _db)
    })
    .catch(err => {
        callback(err)
    })
}

//get access to database
const getDb = () => {
    if(!_db) {
        throw Error ('Database not initialized')
    }
    return _db
}

module.exports = { initDb, getDb }