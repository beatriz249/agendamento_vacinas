const express = require('express');

const routes = express.Router();

const pacienteController = require('../controllers/pacienteController');

routes.post('/agendar', pacienteController.insert);

routes.get('/pacientes', pacienteController.index);

routes.get('/pacientes/:id', pacienteController.details);

routes.get('/pacientes/:id', pacienteController.details);

routes.put('/pacientes/:id', pacienteController.update);

routes.delete('/pacientes/:id', pacienteController.delete);
module.exports = routes;
