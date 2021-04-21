const express = require('express');
const routes = express.Router();

const pacienteController = require('../controllers/pacienteController');

routes.post('/agendar', pacienteController.insert);

module.exports = routes;