const fs = require('fs').promises;
const path = require('path');
const insertAction = require('../services/actionsService');
const { createListSync } = require('./../formats/createListOfJSON');
// insertar todas las acciones que dependen de un ticket
async function insertActions() {
    const directorio = "./json/actions";
    try {
        const ticketList = await createListSync('Tickets');
        if (!ticketList) {
            throw new Error('La lista de tickets no se pudo crear');
        }

        const archivos = await fs.readdir(directorio);
        const archivosJSON = archivos.filter(archivo => path.extname(archivo).toLowerCase() === '.json');

        let resultados = [];

        for (const archivo of archivosJSON) {
            const rutaArchivo = path.join(directorio, archivo);
            const contenido = await fs.readFile(rutaArchivo, 'utf8');
            const datos = JSON.parse(contenido);
            const actions = datos.Actions;

            for (const action of actions) {
                const ticketID = ticketList[action.TicketID];
                if (!ticketID) {
                    console.error(`No se encontró un nuevo ID de ticket para el ID de ticket original: ${action.TicketID}`);
                    continue;
                }
                action.TicketID = ticketID;
                await insertAction(action);
            }

            resultados.push(datos);
        }

        return resultados;
    } catch (error) {
        console.error("Error en insertActions:", error);
    }
}


module.exports = { insertActions };
