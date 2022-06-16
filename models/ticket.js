'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Event)
    }
  }
  Ticket.init(
    {
      goldQuotes: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: 'Quotes must be a number'
        }
      },
      goldPrice: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: 'Price must be a number'
        }
      },
      platinumQuotes: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: 'Quotes must be a number'
        }
      },
      platinumPrice: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: 'Price must be a number'
        }
      },
      silverQuotes: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: 'Quotes must be a number'
        }
      },
      silverPrice: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: 'Price must be a number'
        }
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: 'Event id is required',
          notNull: 'Event id is required'
        }
      }
    },
    {
      sequelize,
      modelName: 'Ticket'
    }
  )
  return Ticket
}
