const router = require('express').Router()

module.exports = db => {
  router.get('/users', (request, response) => {
    db.query(`
    SELECT * FROM users
    `).then(res => {
      response.json(res.rows)
    })
  })

  return router
}