'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userEvent extends Model {
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
  userEvent.init({
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
  }, {
    sequelize,
    modelName: 'userEvent',
  });
  return userEvent;
};