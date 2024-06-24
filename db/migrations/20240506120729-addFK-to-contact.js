'use strict';
const { DataTypes } = require('sequelize');
const { CONTACT_TABLE} = require('./../models/contactsModel');
const { GROUP_TABLE} = require('./../models/groupModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(CONTACT_TABLE, "GroupID", {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: GROUP_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(CONTACT_TABLE, "groupID");
  }
};