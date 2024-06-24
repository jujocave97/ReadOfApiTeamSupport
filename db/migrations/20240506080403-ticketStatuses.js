'use strict';

const { TicketStatusesSchema, TICKETSTATUSES_TABLE } = require('./../models/ticketStatusesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TICKETSTATUSES_TABLE, TicketStatusesSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(TICKETSTATUSES_TABLE);
  }
};