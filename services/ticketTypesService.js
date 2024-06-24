const { seq } = require('./../libs/sequelize');
const {addTOJson} = require('../readAPI/addToKeysToJSON');
const { TicketType, TicketTypesSchema } = require('./../db/models/ticketTypesModel')

TicketType.init(TicketTypesSchema, TicketType.config(seq));
// metodos crud para tikcet type, en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertTicketType(dataTT) {
    try {
      const newTicketType = await TicketType.create(dataTT);
       addTOJson(dataTT.ID, newTicketType.id, './keys/TicketTypes.json');
      console.log('Nuevo ID de ticket type:', newTicketType.id);
    } catch (error) {
      console.error('Error al insertar ticket type:', error);
    }
}

module.exports = {insertTicketType};