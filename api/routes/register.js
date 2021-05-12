const router = require('express').Router()

module.exports = (db, jwt, accessTokenSecret) => {
  router.get('/register', (request, response) => {
    response.send('hi')
  })

  router.post('/new-register', (request, response) => {
    const { user, password, confirm } = request.body
    const arr = [user, password]
    if (password !== confirm) {
      response.send('The passwords provided do not match')
    } else {
      db.query(`
      INSERT INTO users (email, password) 
      VALUES ($1, $2)
      `, arr).then(res => {
        response.send('user created')
      })
    }

  })

  return router
}