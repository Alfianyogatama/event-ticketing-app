'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goldQuotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      goldPrice: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      platinumQuotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      platinumPrice: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      silverQuotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      silverPrice: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};