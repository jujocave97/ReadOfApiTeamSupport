const { config } = require('./../config/config');
// configuracion de la conexion a la bbdd
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = config.dbHost;
const PORT = config.dbPort;
const DATABASE = config.dbName;
const INSTANCE = config.dbInstance;

const URI = `mssql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?instance=${INSTANCE}`;

console.log( URI);

module.exports = {
    development: {
        url: URI,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: false, // Si la conexión requiere cifrado, cambia a 'true'
                trustServerCertificate: true // Si confías en el certificado del servidor, cambia a 'true'
            }
        }
    },
    production: {
        url: URI,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: false, // Si la conexión requiere cifrado, cambia a 'true'
                trustServerCertificate: true // Si confías en el certificado del servidor, cambia a 'true'
            }
        }
    }
};