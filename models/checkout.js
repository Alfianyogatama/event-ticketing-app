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
    }
  }
  Checkout.init({
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ticketClass: DataTypes.STRING,
    nominal: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    paymentStatus: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Checkout',
  });
  return Checkout;
};