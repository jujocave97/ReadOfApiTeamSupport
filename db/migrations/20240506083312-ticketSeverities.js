'use strict';

const { TicketSeveritiesSchema, TICKETSEVERITIES_TABLE } = require('./../models/ticketSeveritiesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TICKETSEVERITIES_TABLE, TicketSeveritiesSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(TICKETSEVERITIES_TABLE);
  }
};