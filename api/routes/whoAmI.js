const router = require('express').Router()

module.exports = (jsonWebToken, jwtSecret) => {
  router.post('/whoAmI', (req, res) => {
    console.log(req.body)
    const key = Object.keys(req.body)[0]

    const user = jsonWebToken.verify(key, jwtSecret)
    res.json({user: user.username})
  })
  return router
}