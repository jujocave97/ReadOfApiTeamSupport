'use strict';

const { contactSchema, CONTACT_TABLE } = require('./../models/contactsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CONTACT_TABLE, contactSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(CONTACT_TABLE);
  }
};