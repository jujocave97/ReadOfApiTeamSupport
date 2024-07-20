# Proyecto de Migración de Datos de Team Support a una Base de Datos

Este proyecto tiene como objetivo recoger datos de Team Support a través de su API en formato JSON, crear una base de datos a partir de esos datos, y migrar los datos a la nueva base de datos utilizando Node.js y Sequelize.

## Tabla de Contenidos

- [Proyecto de Migración de Datos de Team Support a Flexygo](#proyecto-de-migración-de-datos-de-team-support-a-flexygo)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Primer Paso: Estudio de la API y Creación de la Base de Datos](#primer-paso-estudio-de-la-api-y-creación-de-la-base-de-datos)
  - [Segundo Paso: Configuración del Entorno y Automatización de Migraciones](#segundo-paso-configuración-del-entorno-y-automatización-de-migraciones)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Configuracion](#configuracion)
  - [Llamadas](#llamadas)
    - [Leer de api](#leer-de-api)
    - [Insertar a BD](#insertar-a-bd)
- [work in progress](#work-in-progress)

## Descripción

Proyecto en el que recogemos datos de Team Support a través de su API en formato JSON. A partir de la API, creamos la base de datos con su respectivo modelo entidad-relación y realizamos el paso a tablas con el objetivo de migrar esos datos a la nueva base de datos creada usando Node.js. El objetivo final es conectar la base de datos a una aplicación Flexygo.

## Primer Paso: Estudio de la API y Creación de la Base de Datos

1. Estudiar la API de Team Support para entender la estructura de los datos y las relaciones entre ellos.
2. Crear el diseño de la base de datos utilizando un modelo entidad-relación.
3. Implementar la base de datos en un gestor de bases de datos (ej. MySQL, PostgreSQL).

## Segundo Paso: Configuración del Entorno y Automatización de Migraciones

1. Configurar el entorno de programación:
   - Instalar Node.js y npm.
   - Instalar Sequelize como ORM para manejar las migraciones de la base de datos.

2. Programar el script de migración:
   - Conectar a la API de Team Support y obtener los datos en formato JSON.
   - Crear las migraciones necesarias para transferir los datos a la base de datos.
   - Automatizar las migraciones utilizando Sequelize para asegurar que los datos se puedan migrar a cualquier base de datos compatible.

## Requisitos

- Node.js
- npm (Node Package Manager)
- Sequelize
- Un gestor de bases de datos compatible (MySQL, PostgreSQL,MSSQL etc.)

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo:

```bash
# Clonar el repositorio
git clone https://github.com/jujocave97/TS-Backend.git

# Instalar las dependencias
npm install
npm i dontenv
npm install --save sequelize
```

## Configuracion

archivo .env
```javascript
PORT= numeroDePuerto
DB_USER='usuario'
DB_PASSWORD='password'
DB_HOST='host'
DB_NAME='nombreDB'
DB_PORT='puertoQueUsaLaDB'
DB_INSTANCE=''
```

archivo .sequelize
```javascript
const path = require('path');
 module.exports = {
  'config': path.resolve('db', 'config.js'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
   'migrations-path': path.resolve('db', 'migrations')
   }
```
archivo package.json
```javascript
{
  "name": "tiene que aparecer el nombre del proyecto",
  "version": "1.0.0",
  "description": "",
  "main": "archivomain.js",
  "scripts": {
    "dev": "node --watch api/archivomain.js",
    "start": "node api/archivomain.js",
    "lint": "eslint",
    "migrations:generate": "sequelize-cli migration:generate --name",
    "migrations:run": "sequelize-cli db:migrate",
    "migrations:revert": "sequelize-cli db:migrate:undo",
    "migrations:delete": "sequelize-cli db:migrate:undo:all"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "moment": "^2.30.1",
    "mssql": "^10.0.2",
    "mysql2": "^3.9.7",
    "sequelize": "^6.37.3",
    "yargs": "^17.7.2"
  },
  "devDependencies": {
    "sequelize-cli": "^6.6.2"
  }
}
```

## Llamadas
### Leer de api 
Generar el json de la api de team support segun el endpoint requerido

ej : node readAPItoConvertJSON.js --endpoint Tickets --directory Tickets

Generar las actions de los Tickets 

ej: node generateActions.js

### Insertar a BD
Insertar todo en la BD : 
node store/insertAll.js

# ReadOfApiTeamSupport
