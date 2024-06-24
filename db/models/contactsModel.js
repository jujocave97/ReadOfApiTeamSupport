const {Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla contacts y sus respectivas columnas
const CONTACT_TABLE= 'contacts';

const contactSchema = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MiddleName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Title: {
      type: DataTypes.STRING,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    DateCreated: {
      type:DataTypes.STRING,
      
    },
    DateModified: {
      type:DataTypes.STRING,
    },
    LastLogin: {
      type:DataTypes.STRING,
    },
    LastActivity: {
      type:DataTypes.STRING,
    },
    LastPing: {
      type:DataTypes.STRING,
    },
    IsPortalUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    InOffice: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    InOfficeComment: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    DisableOrganizationTicketsViewOnPortal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    PortalViewOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    BlockInboundEmail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    OrganizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CustomerID: {
      type: DataTypes.UUID
    },GroupID: {
      type: DataTypes.UUID,
    },
  
  }

  class Contact extends Model {
    static associate (models){
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: CONTACT_TABLE,
            modelName: CONTACT_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Contact, contactSchema, CONTACT_TABLE}