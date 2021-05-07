const fs = require('fs')

const read = path => {
  return fs.readFileSync(path, {
    encoding: 'utf-8'
  })
}

module.exports = read