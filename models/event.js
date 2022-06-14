'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    name: DataTypes.STRING,
    event_date: DataTypes.DATE,
    published_date: DataTypes.DATE,
    poster_url: DataTypes.STRING,
    description: DataTypes.STRING,
    event_type: DataTypes.STRING,
    status: DataTypes.STRING,
    organizerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};