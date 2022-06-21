'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class fullfiledQuota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fullfiledQuota.belongsTo(models.Event, { foreignKey: 'event_id' })
    }
  }
  fullfiledQuota.init(
    {
      gold: { type: DataTypes.INTEGER, defaultValue: 0 },
      silver: { type: DataTypes.INTEGER, defaultValue: 0 },
      platinum: { type: DataTypes.INTEGER, defaultValue: 0 },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notNull: 'Event id is required' },
      },
    },
    {
      sequelize,
      modelName: 'fullfiledQuota',
    }
  )
  return fullfiledQuota
}
