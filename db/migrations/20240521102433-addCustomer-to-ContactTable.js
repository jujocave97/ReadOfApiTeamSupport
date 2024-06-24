'use strict';
const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE} = require('./../models/customerModel');
const { CONTACT_TABLE} = require('./../models/contactsModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(CONTACT_TABLE, "CustomerID", {
      allowNull: true,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: CUSTOMER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(CONTACT_TABLE, "CustomerID");
  }
};
