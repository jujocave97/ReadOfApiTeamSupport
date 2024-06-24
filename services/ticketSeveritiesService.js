const { seq } = require('../libs/sequelize');
const {addTOJson} = require('../readAPI/addToKeysToJSON');
const { TicketSeverities, TicketSeveritiesSchema } = require('./../db/models/ticketSeveritiesModel')

TicketSeverities.init(TicketSeveritiesSchema, TicketSeverities.config(seq));
// metodos crud para ticket severities , en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertTicketSeverity(dataTS) {
    try {
      const newTicketSeverity = await TicketSeverities.create(dataTS);
       addTOJson(dataTS.ID, newTicketSeverity.id, './keys/TicketSeverities.json');
      console.log('Nuevo ID de Ticket Severity:', newTicketSeverity.id);
    } catch (error) {
      console.error('Error al insertar el ticket severity:', error);
    }
}

module.exports = {insertTicketSeverity};