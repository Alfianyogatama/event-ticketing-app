'use strict'
const { Model } = require('sequelize')
const organizer = require('./organizer')

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.User, { through: models.userEvent })
      Event.hasMany(models.userEvent)
      Event.hasMany(models.transaction)
      Event.hasOne(models.fullfiledQuota, { foreignKey: 'event_id' })
      Event.belongsTo(models.organizer, { foreignKey: 'organizerId' })
    }
  }
  Event.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event name is required'
          },
          notNull: 'Event name is required'
        }
      },
      eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event date is required'
          },
          notNull: 'Event date is required'
        }
      },
      posterUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event poster is required'
          },
          notNull: 'Event poster is required',
          isUrl: 'Invalid poster url'
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event description is required'
          },
          notNull: 'Event description is required'
        }
      },
      theme: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event theme is required'
          },
          notNull: 'Event theme is required'
        }
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'created',
        validate: {
          notEmpty: {
            msg: 'Event status is required'
          },
          notNull: 'Event status is required'
          // isIn: {
          //   args: ['created', 'published', 'unpublished', 'done'],
          //   msg: 'Status must be one of : created, published, unpublished, done'
          // }
        }
      },
      organizerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event organizer id is required'
          },
          notNull: 'Event organizer id is required'
        }
      }
    },
    {
      sequelize,
      modelName: 'Event'
      // hooks: {
      //   afterCreate: (data, options) => {
      //     sequelize.models.fullfiledQuota
      //       .create({
      //         eventId: data.id
      //       })
      //       .catch((_) => {
      //         throw new Error()
      //       })
      //   }
      // }
    }
  )

  Event.afterCreate(async (data, options) => {
    await sequelize.models.fullfiledQuota.create({
      gold: 0,
      platinum: 0,
      silver: 0,
      event_id: data.id
    })
  })

  return Event
}
