const router = require('express').Router()

module.exports = db => {
  router.get('/products', (req, res) => {
    db.query(`
    SELECT * FROM products;
    `).then(response => {
      res.json(response.rows)
    })
  })

  return router
}