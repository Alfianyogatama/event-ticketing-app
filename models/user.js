'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Event, {through:models.userEvent})
      User.hasMany(models.userEvent, {foreignKey : 'userId'})
      User.hasMany(models.Transaction, {foreignKey : 'userId'})
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'User name cannot empty'
        },
        isAlphanumeric: {
          msg: 'User name must be a valid letters charracter'
        }
      }
    },
    phoneNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: 'User name cannot empty'
        },
        is: {
          args : ['/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/'],
          msg: 'Invalid phone number'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
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
      type : DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Invalid string date format'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};