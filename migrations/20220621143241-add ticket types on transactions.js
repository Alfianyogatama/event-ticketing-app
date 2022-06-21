'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('transactions', 'gold', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      queryInterface.addColumn('transactions', 'platinum', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      queryInterface.addColumn('transactions', 'silver', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
    ]
  },

  async down(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('transactions', 'goldPrice'),
      queryInterface.removeColumn('transactions', 'platinumPrice'),
      queryInterface.removeColumn('transactions', 'silverPrice'),
    ]
  },
}
