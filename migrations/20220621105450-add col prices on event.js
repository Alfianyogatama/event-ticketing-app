'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('Events', 'goldPrice', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      queryInterface.addColumn('Events', 'platinumPrice', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      queryInterface.addColumn('Events', 'silverPrice', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
    ]
  },

  async down(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Events', 'goldPrice'),
      queryInterface.removeColumn('Events', 'platinumPrice'),
      queryInterface.removeColumn('Events', 'silverPrice'),
    ]
  },
}
