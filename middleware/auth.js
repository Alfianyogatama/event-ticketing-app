const { decodeToken } = require('./../helper/authToken')
const {Event} = require('./../models')

exports.authentication = (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { code: 400, message: 'Invalid token' }
    const payload = decodeToken(access_token)
    req.user = { ...payload }
  } catch (error) {
    next(error)
  }
}

exports.authorization = (req, res, next) => {
  try {
    const eventId = +req.params.userId
    const event = await Event.findByPk(eventId)
    if(!event) throw {code:404, message:'Event not found'}
    if(event) 
      if(req.user.id == event.userId) next()
      throw {code: 403, message: 'Unauthorized'}
    
    
  } catch (error) {
    next(error)
  }
}

