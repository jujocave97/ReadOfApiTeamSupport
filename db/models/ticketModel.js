const {Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla ticket y sus respectivas columnas
const TICKET_TABLE= 'ticket';

const TicketSchema = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    ReportedVersion: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    SolvedVersion: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    IsClosed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    IsVisibleOnPortal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    IsKnowledgeBase: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DateClosed: {
        type: "SMALLDATETIME",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    DaysClosed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    HourSpent: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    SlaViolationHours: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    SlaWarningHours: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    DueDate: {
        type: "SMALLDATETIME",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    JiraKey: {
        type: DataTypes.STRING,
    },
    IsSecured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    TicketNumber: {
      type: DataTypes.INTEGER
    },
    OldID: {
      type: DataTypes.STRING
    },
    ProductID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    GroupID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    UserID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    TicketStatusID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    TicketTypeID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    TicketSeverityID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    ContactID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    CustomerID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    OrganizationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CreatorID : {
        type: DataTypes.UUID
    },
    ModifierID: {
        type: DataTypes.UUID
    }
  }

  class Ticket extends Model {
    static associate (models){
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: TICKET_TABLE,
            modelName: TICKET_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Ticket, TicketSchema, TICKET_TABLE}