const fs = require('fs');
const path = require('path');
// crear json clave valor, clave = idAntiguo valor = idNuevo , junto con la ruta especificada donde se quiere guardar el json
async function addTOJson(clave, valor, rutaArchivo) {
  // Objeto con la clave y el valor que deseas agregar
  const nuevaData = {
    [clave]: valor
  };

  // Verifica si el archivo existe
  const archivoExiste = fs.existsSync(rutaArchivo);

  // Lee el contenido actual del archivo JSON, si existe, y analízalo en un objeto JavaScript
  let objetoJSON = {};
  if (archivoExiste) {
    const data = fs.readFileSync(rutaArchivo, 'utf8');
    objetoJSON = JSON.parse(data);
  }

  // Fusiona el objeto existente con el nuevo objeto
  const objetoFusionado = { ...objetoJSON, ...nuevaData };

  // Convierte el objeto fusionado de vuelta a formato JSON
  const nuevoContenido = JSON.stringify(objetoFusionado, null, 2);

  // Escribe el nuevo contenido en el archivo
  fs.writeFileSync(rutaArchivo, nuevoContenido, 'utf8');

  if (archivoExiste) {
    console.log('Se agregó la clave y el valor al archivo JSON existente correctamente.');
  } else {
    console.log('Se creó el archivo JSON y se agregó la clave y el valor correctamente.');
  }
}

module.exports= {addTOJson}
