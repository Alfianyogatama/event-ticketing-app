'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fullfiledQuota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gold: {
        type: Sequelize.INTEGER,
        defualtValue: 0
      },
      silver: {
        type: Sequelize.INTEGER,
        defualtValue: 0
      },
      platinum: {
        type: Sequelize.INTEGER,
        defualtValue: 0
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id'
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fullfiledQuota')
  }
}

