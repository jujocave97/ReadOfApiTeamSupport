const https = require('https');
const fs = require('fs');
const yargs = require('yargs');
require('dotenv').config();

// generar el json de la api de team support segun el endpoint requerido
// ej : node readAPItoConvertJSON.js --endpoint Tickets --directory Tickets

const argv = yargs
    .option('endpoint', {
        alias: 'e',
        describe: 'ruta',
        demandOption: true, // Hace que el argumento sea obligatorio
        type: 'string' // Tipo de dato esperado
    })
    .option('directory', {
        alias: 'd',
        describe: 'directorio',
        demandOption: true,
        type: 'string' // Tipo de dato esperado
    })
    .argv;

const endpoint = argv.endpoint;
const directory = argv.directory;

const organizationID = process.env.ORGANIZATIONID;
const apiToken = process.env.APITOKEN;
const credentials = `${organizationID}:${apiToken}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');


const options = {
  hostname: 'app.teamsupport.com',
  path: `/api/json/${endpoint}`,
  method: 'GET',
  headers: {
    'Authorization': `Basic ${encodedCredentials}`,
    'Content-Type': 'application/json',
    'User-Agent': 'Iditic',
  },
};


const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk; 
  });
  res.on('end', () => {
    try {
      const parsedData = data;
      fs.writeFile(`./json/${directory}.json`, parsedData, (err) => {
        if (err) throw err;
        console.log("Nuevos datos agregados");
      });
      console.log('Parsed Response:', parsedData);
      // Now you can access the data as a JavaScript object
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();
