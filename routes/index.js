const express = require('express');

// funcion para express actualmente sin uso
function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
}

module.exports = {routerApi};