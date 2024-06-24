const { seq } = require('../libs/sequelize');
const { Actions, ActionsSchema } = require('../db/models/actionsModel')

Actions.init(ActionsSchema, Actions.config(seq));
// metodos crud para actions, en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertAction(dataAction) {
    try {
      const newAction = await Actions.create(dataAction);

      console.log('Nuevo ID del action:', newAction.id);
    } catch (error) {
      console.error('Error al insertar action:', error);
    }
}

module.exports = insertAction;