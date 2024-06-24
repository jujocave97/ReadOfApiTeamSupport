'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { TICKET_TABLE} = require('./../models/ticketModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    queryInterface.changeColumn(TICKET_TABLE, "organizationID", {
    
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: ORGANIZATION_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(TICKET_TABLE, "organizationID");
  
  }
};