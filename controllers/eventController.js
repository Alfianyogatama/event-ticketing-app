const { Event, fullfiledQuota: Quota, organizer, User } = require('./../models')
const validate = require('./../helper/validation/eventValidation')
class Controller {
  static async createEvent(req, res, next) {
    try {
      const { name, eventDate, posterUrl, description, theme, status } =
        req.body

      const { id: organizerId } = req.user

      const newEvent = await Event.create(
        {
          name,
          eventDate,
          posterUrl,
          description,
          theme,
          status,
          organizerId
        },
        { hooks: true }
      )

      if (!newEvent) throw { message: newEvent.message }

      res.status(201).json({
        success: true,
        message: 'Succes create new event',
        data: {
          id: newEvent.id,
          eventName: newEvent.name
        }
      })
    } catch (err) {
      next(err)
    }
  }

  static async getAllEvents(req, res, next) {
    try {
      const events = await Event.findAll(
        {
          where: {
            status: 'published'
          }
        },
        {
          include: [Quota, organizer]
        }
      )
      res.status(200).json(events)
    } catch (err) {
      next(err)
    }
  }

  static async updateEvent(req, res, next) {
    try {
      const { eventId } = req.params
      const { status } = await validate.eventUpdateStatusValidate(req.body)
      const event = await Event.findByPk(eventId)
      if (!event) throw { code: 404, message: 'Event not found' }

      if (event.status === status) throw { message: 'Status has been updated' }
      event.set({
        status
      })

      const result = await event.save()

      res.status(200).json({
        success: true,
        message: `Succes update event status to ${status}`,
        data: result
      })
    } catch (err) {
      next(err)
    }
  }

  static async findById(req, res, next) {
    try {
      const { eventId } = req.params
      console.log(eventId)
      const event = await Event.findByPk(eventId)
      if (!event) throw { message: 'Event not found' }

      res.status(200).json({
        success: true,
        message: 'Success get event',
        data: event
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller

