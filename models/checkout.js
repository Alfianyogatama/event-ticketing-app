'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Checkout.belongsTo(models.User)
      Checkout.belongsTo(models.Event)
    }
  }
  Checkout.init({
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ticketClass: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: ['Gold', 'Platinum', 'Silver'],
          msg: 'Class must be one of : Gold/Platinum/Silver'
        }
      }
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'Nominal must be a valid price'
        }
      }
    },
    paymentDate: {
      type :DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Invalid date format'
        }
      }
    },
    paymentStatus: {
      type :DataTypes.DATE,
      allowNull: false,
      validate: {
        isIn : {
          args: [true, false],
          msg: 'Paymnet status must be one of : true/false'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Checkout',
  });
  return Checkout;
};