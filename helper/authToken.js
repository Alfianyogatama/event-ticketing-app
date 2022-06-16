const jwt = require('jsonwebtoken')
const secret = process.env.JWT_TOKEN

exports.signToken = (payload) => {
  return jwt.sign(payload, secret)
}

exports.decodeToken = (token) => {
  return jwt.verify(token, secret)
}