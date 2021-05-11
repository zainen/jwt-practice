const router = require('express').Router()

const jwt = require('jsonwebtoken')
const accesTokenSecret = 'superdupersecret'

module.exports = db => {
  router.get('/login', (request, response) => {
    console.log(request)

    response.send('hi')
  })

  router.post('/login', (request, response) => {
    // console.log(request.body)
    const arr = [request.body.user, request.body.password]
    db.query(`
    SELECT * FROM users 
    WHERE email = $1 AND password = $2
    `, arr).then(res => {
      if (res.rows) {
        const user = res.rows
        const accessToken = jwt.sign({ username: user.email, role: user.role}, accesTokenSecret)
        response.json({
          accessToken
        })
      } else {
        response.send('Username or password Incorrect')
      }
    })
  })
  return router
}