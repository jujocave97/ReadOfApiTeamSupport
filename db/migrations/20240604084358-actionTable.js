'use strict';

const { ActionsSchema, ACTION_TABLE } = require('./../models/actionsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ACTION_TABLE, ActionsSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(ACTION_TABLE);
  }
};