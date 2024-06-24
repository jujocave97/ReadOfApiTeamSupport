'use strict';
const { DataTypes } = require('sequelize');
const { ACTION_TABLE} = require('./../models/actionsModel');
const { TICKET_TABLE} = require('./../models/ticketModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(ACTION_TABLE, "TicketID", {
      allowNull: true,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: TICKET_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(ACTION_TABLE, "TicketID");
  }
};