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
      gold: DataTypes.INTEGER,
      platinum: DataTypes.INTEGER,
      silver: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER,
      paymentStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'transaction',
    }
  )
  // transaction.afterCreate(async (data, options) => {
  //   const quota = await sequelize.models.fullfiledQuota.findOne({
  //     where: { event_id: data.eventId },
  //   })
  //   quota.set({
  //     gold: quota.gold + options.gold,
  //     platinum: quota.platinum + options.platinum,
  //     silver: quota.silver + options.silver,
  //   })
  //   await quota.save()
  // })
  return transaction
}
