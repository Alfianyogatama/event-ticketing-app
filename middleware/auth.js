const { decodeToken } = require('./../helper/authToken')
const { Event, User, organizer } = require('./../models')

exports.authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { code: 400, message: 'Invalid token' }
    const payload = decodeToken(access_token)
    const user = await User.findByPk(payload.id)
    if (!user) throw { code: 404, message: 'User not found' }
    else req.user = { ...payload }
    next()
  } catch (error) {
    next(error)
  }
}

exports.organizerAuthentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { code: 400, message: 'Invalid token' }
    const payload = decodeToken(access_token)
    const organizerExist = await organizer.findByPk(payload.id)
    if (!organizerExist) throw { code: 404, message: 'Invalid token' }
    else req.user = { ...payload }
    next()
  } catch (error) {
    next(error)
  }
}

exports.userAuthorization = async (req, res, next) => {
  try {
    const eventId = +req.params.userId
    const event = await Event.findByPk(eventId)
    if (!event) throw { code: 404, message: 'Event not found' }
    if (event)
      if (req.user.id == event.userId) next()
      else throw { code: 403, message: 'Unauthorized' }
  } catch (error) {
    next(error)
  }
}

exports.organizerAuthorization = async (req, res, next) => {
  try {
    const eventId = +req.params.eventId
    const event = await Event.findByPk(eventId, {
      include: [organizer],
    })
    if (!event) throw { code: 404, message: 'Event not found' }
    if (event)
      if (req.user.id == event.organizerId) next()
      else throw { code: 403, message: 'Unauthorized' }
  } catch (error) {
    console.error(error)
    next(error)
  }
}

// exports.userRoleAuth = async (req, res, next) => {
//   try {
//     const { userType } = await organizer.findByPk(req.user.userId)
//     if (userType !== 'organizer') throw { code: 403, message: 'Unauthorized' }
//     next()
//   } catch (error) {
//     next(error)
//   }
// }
