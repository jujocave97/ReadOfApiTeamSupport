'use strict';

const { TicketSchema, TICKET_TABLE } = require('./../models/ticketModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TICKET_TABLE, TicketSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(TICKET_TABLE);
  }
};