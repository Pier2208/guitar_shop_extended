const express = require('express')

//init app
const app = express()

//listening to
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})