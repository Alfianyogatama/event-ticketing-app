'use strict'
const { Model } = require('sequelize')
const { hashPassword } = require('./../helper/hash')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Event, { through: models.userEvent })
      User.hasMany(models.userEvent, { foreignKey: 'userId' })
      User.hasMany(models.transaction, { foreignKey: 'userId' })
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'User name cannot empty'
          }
          // isAlpha: {
          //   msg: 'User name must be a valid letters charracter'
          // }
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'User name cannot empty'
          },
          notNull: 'User name is required'
          // is: {
          //   args: [
          //     '/^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/'
          //   ],
          //   msg: 'Invalid phone number'
          // }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'User email cannot empty'
          },
          isEmail: {
            msg: 'Invalid email format'
          }
        }
      },
      birthdayDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            msg: 'Invalid string date format'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: 'Password is required',
          notNull: 'Password is required'
        }
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: 'Password is required',
          notNull: 'Password is required',
          isIn: {
            args: [['male', 'female']],
            msg: 'Gender must be one of : male or female'
          }
        }
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: 'User type is required',
          notNull: 'User type is required',
          isIn: {
            args: [['organizer', 'participant']],
            msg: 'User type must be one of : participant or organizer'
          }
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: 'address is required',
          notNull: 'address is required'
        }
      },
      profilePhotoUrl: {
        type: DataTypes.STRING,
        validate: {
          isUrl: { msg: 'Invalid profile photo url' }
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password) // proses hashing pass user sebelum masuk db
        }
      }
    }
  )
  return User
}
