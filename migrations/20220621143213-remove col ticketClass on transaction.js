'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('transactions', 'ticketClass')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('transactions', 'ticketClass', {
      type: Sequelize.STRING,
    })
  },
}
