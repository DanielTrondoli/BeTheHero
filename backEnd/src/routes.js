const express = require('express');
const ongControllers = require('./Controllers/OngController');
const incidentControllers = require('./Controllers/IncidentController');
const profileControllers  = require('./Controllers/ProfileController');
const sessionController   = require('./Controllers/SessionController');
const routes = express.Router();

routes.get('/ongs', ongControllers.index);
routes.post('/ongs', ongControllers.create);

routes.get('/incidents', incidentControllers.index);
routes.post('/incidents', incidentControllers.create);
routes.delete('/incidents/:id',incidentControllers.delete);

routes.get('/profile', profileControllers.index);

routes.post('/sessions', sessionController.create);  

module.exports = routes;