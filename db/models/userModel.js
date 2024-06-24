const { Model, DataTypes, Sequelize } = require('sequelize');
const moment = require('moment');
// esquema de la tabla users y sus columnas
const USER_TABLE= 'users';

const UserSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
    },
    MiddleName: {
        type: DataTypes.STRING
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    LastLoggin: {
        type: "SMALLDATETIME",
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    LastActivity: {
        type: "SMALLDATETIME",
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    LastPing: {
        type: "SMALLDATETIME",
        defaultValue: null
    },
    IsSystemAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    IsFinanceAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    IsPortalUser: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    InOffice: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    InOfficeComment: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    DateCreated : {
        type: "SMALLDATETIME",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    DateModified : {
        type: "SMALLDATETIME",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    IsOnline : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    IsChatUser : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    IsAiUser : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    OrganizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    GroupID: {
        type: DataTypes.UUID,
    
    },GroupID: {
        type: DataTypes.UUID,
      },
}

class User extends Model {
    static associate(models) {
       
    }

    static config(sequelize){
        return {
            sequelize, 
            tableName: USER_TABLE,
            modelName: USER_TABLE,
            timestamps: false
        }
    }
}

module.exports = { User, UserSchema, USER_TABLE};