const router = require('express').Router()

module.exports = db => {
  router.get('/test', (request, response) => {
    db.query(`select * from users`).then(resp => {
      response.json(resp.rows)
    })
  })
  return router
}