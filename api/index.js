const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const db = require('./db')


const jwtSecret = 'superdupersecret'

// middle
const jwt = require('express-jwt')
const jsonWebToken = require('jsonwebtoken')
const cors = require('cors')

const PORT = process.env.PORT

// Use Middle
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Routes
const login = require('./routes/login')
const register = require('./routes/register')
const getUsers = require('./routes/getUsers')
const whoAmI = require('./routes/whoAmI')
const products = require('./routes/products')

// schema
const read = require('./helpers/reader')
const payload = read(path.resolve(__dirname, 'db//schema/create.sql'))
app.get('/api/debug/reset', (request, response) => {
  db.query(payload).then(res => {
    console.log('db reset')
    response.status(200).send('db reset')
  })
})


app.get('/jwt', (req, res) => {
  res.json({
    token: jsonWebToken.sign({ user: 'johndoe' }, jwtSecret)
  });
});



// login / register && assign jwt
app.use('/api', login(db, jsonWebToken, jwtSecret))
app.use('/api', register(db, jsonWebToken, jwtSecret))
app.use('/api', products(db))

// app.use(jwt({secret: jwtSecret, algorithms: ['HS256']}))

// app.use('/api', whoAmI(jsonWebToken, jwtSecret))

const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];
app.get('/foods', (req, res) => {
  res.json(foods);
});

// use routes
// app.use('/api', getUsers(db))



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})