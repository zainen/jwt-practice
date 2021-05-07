const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')

const PORT = process.env.PORT

// db
const db = require('./db')

// Routes
const test = require('./routes/test')

// schema
const read = require('./helpers/reader')
const payload = read(path.resolve(__dirname, 'db//schema/create.sql'))
app.get('/api/debug/reset', (request, response) => {
  db.query(payload).then(res => {
    console.log('db reset')
    response.status(200).send('db reset')
  })
})


app.use('/api', test(db))



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})