const router = require('express').Router()

module.exports = (db, jwt, accessTokenSecret) => {
  router.get('/register', (request, response) => {
    response.send('hi')
  })

  router.post('/new-register', (request, response) => {
    const { user, password, confirm } = request.body
    if (password !== confirm) {
      response.send('The passwords provided do not match')
    } else {
      const arr = [user, password, confirm]
      response.send(arr)

    }

  })

  return router
}