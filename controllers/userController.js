const { User } = require('./../models')
const { comparePassword } = require('./../helper/hash')
const { signToken } = require('./../helper/authToken')
const res = require('express/lib/response')
class Controller {
  static async userFindOne(matcher) {
    if (!matcher) return { status: false }
    const user = User.findOne(matcher)
    if (!user) return false
    return { data: user }
  }

  static async register(req, res, next) {
    try {
      const {
        fullName,
        phoneNumber,
        email,
        birthdayDate,
        password,
        gender,
        address,
        profilePhotoUrl
      } = req.body

      const user = await User.findOne({
        where: { email }
      })
      // console.log(req.body)
      // console.log(user)
      if (user) throw { code: 400, message: 'User already registered' }

      const newUser = await User.create({
        fullName,
        phoneNumber,
        email,
        birthdayDate,
        password,
        gender,
        address,
        profilePhotoUrl
      })

      if (newUser) {
        const payload = {
          id: newUser.id,
          name: newUser.fullName,
          email: newUser.email
        }
        const token = signToken({
          ...payload
        })
        const { userId, ...result } = payload

        res.status(201).json({
          success: true,
          message: 'User registered successfully',
          data: { ...result, token }
        })
      }
    } catch (err) {
      console.error(err)
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password: inputPass } = req.body
      const user = await User.findOne({ where: { email } })

      let code = 401
      let message = 'Wrong email/password'

      if (!user) throw { message }
      const password = comparePassword(inputPass, user.password)

      if (!password) throw { message }
      const payload = {
        id: user.id,
        name: user.fullName,
        email: user.email
      }
      const token = signToken(payload)
      const { userId, ...result } = payload
      res.status(200).json({
        success: true,
        message: 'Succes login',
        data: {
          ...result,
          token
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller

