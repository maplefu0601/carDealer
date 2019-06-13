'use strict';

const express = require('express');
const app = express();
const routeControl = require('./routeControl');

const carMakeRoutes = express.Router();
carMakeRoutes.get('/findAll', routeControl);

const carInfoRoutes = express.Router();
carInfoRoutes.post('/add', routeControl);
carInfoRoutes.get('/findAll', routeControl);
carInfoRoutes.post('/search', routeControl);
carInfoRoutes.post('/update', routeControl);
carInfoRoutes.post('/remove', routeControl);

const showRoomRoutes = express.Router();
showRoomRoutes.post('/add', routeControl);
showRoomRoutes.get('/findAll', routeControl);
showRoomRoutes.post('/update', routeControl);
showRoomRoutes.post('/remove', routeControl);

const eventRoutes = express.Router();
eventRoutes.post('/add', routeControl);
eventRoutes.get('/findAll', routeControl);
eventRoutes.post('/remove', routeControl);

const userRoutes = express.Router();
userRoutes.post('/register', routeControl);
userRoutes.post('/login', routeControl);
userRoutes.post('/logout', routeControl);
userRoutes.post('/add', routeControl);
userRoutes.get('/findAll', routeControl);
userRoutes.get('/findAllToday', routeControl);
userRoutes.get('/findHistoryToday', routeControl);
userRoutes.post('/remove', routeControl);

const groupRoutes = express.Router();
groupRoutes.post('/add', routeControl);
groupRoutes.get('/findAll', routeControl);
groupRoutes.post('/remove', routeControl);
groupRoutes.post('/join', routeControl);
groupRoutes.post('/quit', routeControl);

module.exports = { carMakeRoutes, carInfoRoutes, showRoomRoutes, eventRoutes, userRoutes, groupRoutes };
