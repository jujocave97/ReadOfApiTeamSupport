'use strict';

const { TicketContactSchema, TICKETCONTACTTABLE } = require('./../models/ticketContactosModel');
const { TicketCustomerSchema, TICKETCUSTOMERTABLE } = require('./../models/ticketCustomersModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TICKETCONTACTTABLE, TicketContactSchema);
    await queryInterface.createTable(TICKETCUSTOMERTABLE, TicketCustomerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(TICKETCONTACTTABLE);
    await queryInterface.dropAllEnums(TICKETCUSTOMERTABLE);
  }
};