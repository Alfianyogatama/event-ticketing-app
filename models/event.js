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
      Event.belongsToMany(models.User, {through:models.userEvent})
      Event.hasMany(models.userEvent, {foreignKey:'eventId'})
      Event.hasMany(models.Transaction, {foreignKey:'eventId'})
    }
  }
  Event.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Event name is required'
        },
        notNull: 'Event name is required'
      }
    },
    eventDate: {
      type : DataTypes.DATE,
      allowNull : false,
      validate: {
        notEmpty: {
          msg: 'Event date is required'
        },
        notNull: 'Event date is required'
      }
    },
    posterUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: 'Event poster is required'
        },
        notNull: 'Event poster is required',
        isUrl: 'Invalid poster url'
      }
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: 'Event description is required'
        },
        notNull: 'Event description is required'
      }
    },
    theme: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: 'Event theme is required'
        },
        notNull: 'Event theme is required'
      }
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: 'Event status is required'
        },
        notNull: 'Event status is required'
      }
    },
    organizerId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: 'Event organizer id is required'
        },
        notNull: 'Event organizer id is required'
      }
    }
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};