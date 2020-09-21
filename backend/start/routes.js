'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager');

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user', 'UserController.create');
Route.post('/login', 'UserController.login');

Route.post('/registrar', 'ClientController.create'),
Route.get('/validar', 'ClientController.index').middleware('auth');
Route.put('/validar/:id', 'ClientController.update').middleware('auth');
