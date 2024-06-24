'use strict';

const { TicketTypesSchema, TICKETTYPES_TABLE } = require('./../models/ticketTypesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TICKETTYPES_TABLE, TicketTypesSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(TICKETTYPES_TABLE);
  }
};