const { Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla product version y sus respectivos campos
const TICKETCONTACTTABLE = 'ticket_contacts';

const TicketContactSchema = {
    TicketID: {
        type: DataTypes.UUID,
        references: {
            model: 'ticket',
            key: 'id'
        },
        primaryKey: true
    },
    ContactID: {
        type: DataTypes.UUID,
        references: {
            model: 'contacts',
            key: 'id'
        },
        primaryKey: true
    }
}

class TicketContactVersion extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: TICKETCONTACTTABLE, 
            modelName: TICKETCONTACTTABLE,
            timestamps: false
        }
    }
}

module.exports = { TicketContactVersion, TicketContactSchema, TICKETCONTACTTABLE}