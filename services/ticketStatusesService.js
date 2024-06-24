const { seq } = require('./../libs/sequelize');
const {addTOJson} = require('../readAPI/addToKeysToJSON');
const { TicketStatus, TicketStatusesSchema } = require('./../db/models/ticketStatusesModel')

TicketStatus.init(TicketStatusesSchema, TicketStatus.config(seq));
// metodos crud para ticket status, en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientess
async function insertTicketStatus(dataTS) {
    try {
      const newTicketStatus = await TicketStatus.create(dataTS);
      addTOJson(dataTS.Name, newTicketStatus.id, './keys/TicketStatus.json');
      console.log('Nuevo ID de ticket status:', newTicketStatus.id);
    } catch (error) {
      console.error('Error al insertar el ticket status:', error);
    }
}

module.exports = {insertTicketStatus};