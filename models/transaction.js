'use strict'
const { Model, Transaction } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.User, { foreignKey: 'userId' })
      transaction.belongsTo(models.Event, { foreignKey: 'eventId' })
    }
  }
  transaction.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      ticketClass: DataTypes.STRING,
      nominal: DataTypes.INTEGER,
      paymentStatus: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'transaction'
    }
  )
  return transaction
}
