const router = require('express').Router()



module.exports = (db, jwt, jwtSecret) => {
  // router.get('/login', (request, response) => {
  //   console.log(request)

  //   response.send('hi')
  // })

  router.get('/login', (request, response) => {
    // console.log(request.body)
    const arr = [request.body.user, request.body.password]
    db.query(`
    SELECT * FROM users 
    WHERE email = $1 AND password = $2
    `, arr).then(res => {
      const user = res.rows[0]
      console.log(user)
      if (user) {
        const accessToken = jwt.sign({ id: user.id, username: user.email, role: user.role}, jwtSecret)
        response.json({
          token: accessToken
        })
      } else {
        response.send('Username or password Incorrect')
      }
    })
  })
  return router
}