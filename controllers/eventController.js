const {
  Event,
  fullfiledQuota: Quota,
  organizer,
  User,
  transaction: Transaction,
} = require('./../models')
const validate = require('./../helper/validation/eventValidation')
const { getPagingData } = require('./../helper/pagination')
const transaction = require('../models/transaction')
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
          organizerId,
        },
        { hooks: true }
      )

      if (!newEvent) throw { message: newEvent.message }

      res.status(201).json({
        success: true,
        message: 'Succes create new event',
        data: {
          id: newEvent.id,
          eventName: newEvent.name,
        },
      })
    } catch (err) {
      next(err)
    }
  }

  static async getAllEvents(req, res, next) {
    try {
      const queries = { ...req.query }
      let limit = queries.limit ?? 5
      let statusFilter = queries.status ?? ''
      let filterPage = queries.page ?? 0
      let getStatusFilter = {}
      if (statusFilter)
        getStatusFilter = { where: { status: statusFilter } }
      let getResultPage = await Event.findAndCountAll({
        getStatusFilter,
        include: [organizer, Quota],
        limit,
        offset: filterPage * limit,
      })

      const dataShown = getPagingData(getResultPage, filterPage, limit)
      if (getResultPage.rows.length !== 0) {
        res.status(200).json(dataShown)
      } else if (getResultPage.rows.length === 0) {
        throw { message: 'Page not found' }
      }

      const events = await Event.findAll(
        {
          where: {
            status: 'published',
          },
        },
        {
          include: [
            { model: Quota },
            {
              model: organizer,
              attributes: {
                exclude: ['password'],
              },
            },
          ],
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

      if (event.status === status)
        throw { message: 'Status has been updated' }
      event.set({
        status,
      })

      const result = await event.save()

      res.status(200).json({
        success: true,
        message: `Succes update event status to ${status}`,
        data: result,
      })
    } catch (err) {
      next(err)
    }
  }

  static async findById(req, res, next) {
    try {
      const { eventId } = req.params
      const event = await Event.findByPk(eventId, {
        include: [
          { model: Quota },
          {
            model: organizer,
            attributes: {
              exclude: ['password'],
            },
          },
        ],
      })
      if (!event) throw { message: 'Event not found' }

      res.status(200).json({
        success: true,
        message: 'Success get event',
        data: event,
      })
    } catch (err) {
      next(err)
    }
  }

  static async getParticipants(req, res, next) {
    try {
      const { eventId } = req.params
      const event = await Transaction.findAll({
        where: {
          eventId,
          paymentStatus: 'done',
        },
        include: [
          {
            model: Event,
          },
          {
            model: User,
            attributes: { exclude: ['password'] },
          },
        ],
      })

      res.status(200).json({
        success: true,
        message: 'Success get list event participant',
        data: event,
      })
    } catch (err) {
      next(err)
    }
  }

  static async updateTicketClass(req, res, next) {
    try {
      const { eventId } = req.params
      const classUpdate = { ...req.body }

      const event = await Event.findByPk(eventId)
      if (!event) throw { message: 'Event not found' }
      event.set(classUpdate)

      const result = await event.save()
      res.status(200).json({
        success: true,
        message: 'Success update event class',
        data: result,
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller
