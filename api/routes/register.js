const router = require('express').Router()

module.exports = (db, jwt, jwtSecret) => {
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
      RETURNING *
      `, arr).then(res => {
        const user = res.rows[0]
        const accessToken = jwt.sign({ id: user.id, user: user.email, role: user.role }, jwtSecret)
        response.json({
          token: accessToken
        })
      })
    }

  })

  return router
}