const { seq } = require('./../libs/sequelize');
const { User, UserSchema } = require('./../db/models/userModel')
const {addTOJson} = require('../readAPI/addToKeysToJSON');
User.init(UserSchema, User.config(seq));
// metodos crud para user, en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertUser(dataUser) {
    try {
      const newUser = await User.create(dataUser);
      addTOJson(dataUser.ID, newUser.id, './keys/Users.json');
      console.log('Nuevo ID de Usuario:', newUser.id);
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }
}

module.exports = {insertUser};