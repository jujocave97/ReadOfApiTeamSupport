const { seq } = require('./../libs/sequelize');
const { Organization, organizationsSchema, ORGANIZATION_TABLE } = require('./../db/models/organizationModel')

Organization.init(organizationsSchema, Organization.config(seq));
// metodos crud para organization, en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertOrganization(newOrganizationData) {
try{
    const newOrganization = await Organization.create(newOrganizationData);

    console.log('Nuevo objeto de organización:', newOrganization);
} catch (error) {
    console.error('Error al crear la organización:', error);
}
}


module.exports = {insertOrganization};