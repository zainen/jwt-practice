const router = require('express').Router()

module.exports = db => {
  router.get('/login', (request, response) => {
    console.log(request)

    response.send('hi')
  })

  return router
}