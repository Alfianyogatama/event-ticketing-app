'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      eventDate: {
        type: Sequelize.DATE
      },
      publishedDate: {
        type: Sequelize.DATE
      },
      posterUrl: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      eventType: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      organizerId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Organizers',
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
    await queryInterface.dropTable('Events');
  }
};