'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class userEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userEvent.belongsTo(models.User, { foreignKey: 'userId' })
      userEvent.belongsTo(models.Event, { foreignKey: 'eventId' })
    }
  }
  userEvent.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Event id is required'
          },
          notNull: 'Event id is required'
        }
      },
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'userEvent'
    }
  )
  return userEvent
}
