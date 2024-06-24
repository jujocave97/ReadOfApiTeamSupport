const { seq } = require('./../libs/sequelize');
const {addTOJson} = require('../readAPI/addToKeysToJSON');
const { Ticket, TicketSchema } = require('./../db/models/ticketModel')

Ticket.init(TicketSchema, Ticket.config(seq));
// metodos crud para ticket  , en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertTicket(dataTicket) {
    try {
      const newTicket = await Ticket.create(dataTicket);
      addTOJson(dataTicket.ID, newTicket.id, './keys/Tickets.json');
      console.log('Nuevo ID de ticket:', newTicket.id);
      return newTicket;
    } catch (error) {
      console.error('Error al insertar el ticket:', error);
    }
}


module.exports = {insertTicket};