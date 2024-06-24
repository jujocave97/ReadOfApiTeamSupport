const fs = require('fs').promises;
const path = require('path');

// Función para leer un archivo JSON de forma asíncrona
async function createListSync(rute) {
    const filePath = path.resolve(__dirname, `./../keys/${rute}.json`);
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const objectList = JSON.parse(data);
        return objectList;
    } catch (error) {
        console.error(`Error leyendo el archivo JSON en ${filePath}:`, error);
    }
}

module.exports = { createListSync };
