'use strict';
const { DataTypes } = require('sequelize');
const { TICKET_TABLE} = require('./../models/ticketModel');
const { USER_TABLE} = require('./../models/userModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(TICKET_TABLE, "CreatorID", {
      allowNull: true,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.changeColumn(TICKET_TABLE, "ModifierID", {
      allowNull: true,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TICKET_TABLE, "CreatorID");
    await queryInterface.removeColumn(TICKET_TABLE, "ModifierID");
  }
};