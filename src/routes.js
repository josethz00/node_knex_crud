const express = require('express');

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();


//Users
routes.get('/users', UserController.index );
routes.post('/users', UserController.create );
routes.put('/users/:id', UserController.update );
routes.delete('/users/:id', UserController.delete );

//Projects
routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.create);

module.exports = routes;