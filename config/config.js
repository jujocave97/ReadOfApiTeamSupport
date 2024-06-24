require('dotenv').config();
// exportacion de .env para que su lectura en el codigo sea mas facil
const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbInstance: process.env.DB_INSTANCE
}

module.exports = { config };