const { User } = require('./../models')

class Controller {
  static async register(req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Controller
