'use strict'
const { Model, STRING } = require('sequelize')
const { hashPassword } = require('./../helper/hash')

module.exports = (sequelize, DataTypes) => {
  class organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      organizer.hasMany(models.Event)
    }
  }
  organizer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Name is required' },
          notNull: { msg: 'Name is required' }
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Phone number is required' },
          notNull: { msg: 'Phone number is required' }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Email is required' },
          notNull: { msg: 'Email is required' }
        }
      },
      address: DataTypes.TEXT,
      logoUrl: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'organizer',
      hooks: {
        beforeCreate: (input) => {
          input.password = hashPassword(input.password) // proses hashing pass user sebelum masuk db
        }
      }
    }
  )
  return organizer
}

