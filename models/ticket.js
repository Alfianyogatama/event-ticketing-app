'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    goldQuotes: DataTypes.INTEGER,
    goldPrice: DataTypes.INTEGER,
    platinumQuotes: DataTypes.INTEGER,
    platinumPrice: DataTypes.INTEGER,
    silverQuotes: DataTypes.INTEGER,
    silverPrice: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};