'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizer.hasMany(models.Event, { foreignKey: 'organizerId' })
    }
  }
  Organizer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Organizer name cannot empty'
          }
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Organizer phone is required'
          },
          is: {
            args: [
              '/^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/'
            ],
            msg: 'Invalid phone number'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Organizer email is required'
          },
          isEmail: {
            msg: 'Invalid email format'
          }
        }
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Organizer address is required'
          }
        }
      },
      logoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event organizer logo is required'
          },
          notNull: 'Event organizer logo is required',
          isUrl: 'Invalid logo url'
        }
      }
    },
    {
      sequelize,
      modelName: 'Organizer'
    }
  )
  return Organizer
}
