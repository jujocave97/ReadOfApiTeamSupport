const {Model, DataTypes, Sequelize } = require('sequelize');
// esuqema de la tabla customers y sus respectivas columnas
const CUSTOMER_TABLE= 'customers';

const CustomerSchema = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Description: {
      type: DataTypes.STRING,
    },
    Website: {
      type: DataTypes.STRING,
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    InActiveReason: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: false
    },
    PrimaryContact: {
      type: DataTypes.STRING,
    },
    DateCreated: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    DateModified: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    HasPortalAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    SAExpirationDate: {
      type: "SMALLDATETIME",
    },
    SlaName: {
      type: DataTypes.STRING,
    },
    Domains: {
      type: DataTypes.STRING,
    },
    SupportHours: {
      type: DataTypes.STRING,
    },
    SupportHoursUsed: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0",
    },
    SupportHoursRemaining: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    NeedsIndexing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    CustDisIndex: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CustDistIndexTrend: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    EmailTicketActions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    },
    EntityID: {
      type: DataTypes.INTEGER,
    },
    GroupID: {
      type: DataTypes.UUID,
    },
    UserID: {
      type: DataTypes.UUID,
      allowNull: true
    },
    OrganizationID: {
      type: DataTypes.INTEGER
    }
    
  }

  class Customer extends Model {
    static associate (models){
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: CUSTOMER_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE}