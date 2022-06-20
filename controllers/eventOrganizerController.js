const { organizer: Organizer } = require('./../models')
const { comparePassword } = require('./../helper/hash')
const { signToken } = require('./../helper/authToken')

class Controller {
  static async register(req, res, next) {
    try {
      const { name, phoneNumber, email, address, logoUrl, password } = req.body

      const user = await Organizer.findOne({
        where: { email }
      })

      if (user) throw { code: 400, message: 'User already registered' }

      const newOrganizer = await Organizer.create({
        name,
        phoneNumber,
        email,
        address,
        logoUrl,
        password
      })

      if (newOrganizer) {
        const payload = {
          id: newOrganizer.id,
          name: newOrganizer.name,
          mail: newOrganizer.email
        }
        const token = signToken({
          ...payload
        })
        const { id, ...result } = payload

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
      const organizer = await Organizer.findOne({ where: { email } })

      let code = 401
      let message = 'Wrong email/password'

      if (!organizer) throw { code, message }
      console.log(inputPass, organizer.password)
      const password = comparePassword(inputPass, organizer.password)
      if (!password) throw { message }
      const payload = {
        id: organizer.id,
        name: organizer.name,
        email: organizer.email
      }
      const token = signToken(payload)
      const { id, ...result } = payload
      res.status(200).json({
        success: true,
        message: 'Succes login',
        data: {
          ...result,
          token
        }
      })
    } catch (err) {
      console.error(err)
      next(err)
    }
  }
}

module.exports = Controller

