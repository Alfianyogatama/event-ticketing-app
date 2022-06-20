const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

exports.hashPassword = (pass) => {
  return bcrypt.hashSync(pass, salt)
}

exports.comparePassword = (pass, hash) => {
  return bcrypt.compareSync(pass, hash)
}