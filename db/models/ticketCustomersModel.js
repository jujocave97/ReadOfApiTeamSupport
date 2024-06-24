const { Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla product version y sus respectivos campos
const TICKETCUSTOMERTABLE = 'ticket_customers';

const TicketCustomerSchema = {
    TicketID: {
        type: DataTypes.UUID,
        references: {
            model: 'ticket',
            key: 'id'
        },
        primaryKey: true
    },
    CustomerID: {
        type: DataTypes.UUID,
        references: {
            model: 'customers',
            key: 'id'
        },
        primaryKey: true
    }
}

class TicketCustomerVersion extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: TICKETCUSTOMERTABLE, 
            modelName: TICKETCUSTOMERTABLE,
            timestamps: false
        }
    }
}

module.exports = { TicketCustomerVersion, TicketCustomerSchema, TICKETCUSTOMERTABLE}