require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT)
})

pool
  .connect()
  .catch(e => console.log(`Error connecting to postgres ${e}`))

module.exports = pool
