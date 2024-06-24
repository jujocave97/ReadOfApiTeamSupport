'use strict';
const { DataTypes } = require('sequelize');
const { TICKETSTATUSES_TABLE} = require('./../models/ticketStatusesModel');
const { TICKETTYPES_TABLE} = require('./../models/ticketTypesModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(TICKETSTATUSES_TABLE, "TicketTypeID", {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: TICKETTYPES_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TICKETSTATUSES_TABLE, "ticket_typeID");
  }
};