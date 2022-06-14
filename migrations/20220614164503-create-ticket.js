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
        type: Sequelize.INTEGER
      },
      goldPrice: {
        type: Sequelize.INTEGER
      },
      platinumQuotes: {
        type: Sequelize.INTEGER
      },
      platinumPrice: {
        type: Sequelize.INTEGER
      },
      silverQuotes: {
        type: Sequelize.INTEGER
      },
      silverPrice: {
        type: Sequelize.INTEGER
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