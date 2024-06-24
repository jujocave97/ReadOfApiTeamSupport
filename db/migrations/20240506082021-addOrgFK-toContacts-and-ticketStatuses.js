'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { TICKETSTATUSES_TABLE, TicketStatusesSchema} = require('./../models/ticketStatusesModel');
const { CONTACT_TABLE, contactSchema} = require('./../models/contactsModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(TICKETSTATUSES_TABLE, "organizationID", {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: ORGANIZATION_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    queryInterface.changeColumn(CONTACT_TABLE, "organizationID", {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: ORGANIZATION_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TICKETSTATUSES_TABLE, "organizationID");
    await queryInterface.removeColumn(TICKETSTATUSES_TABLE, "organizationID");
  }
};