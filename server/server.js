const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');

const app = express();
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log('Database is connected');
  },
  (err) => {
    console.log('Can not connect to the database' + err);
  },
);

let http = require('http');
let server = http.Server(app);
let socketPort = 4010;
server.listen(socketPort, () => {
  console.log('socket listening on ' + socketPort);
});

let socketIO = require('socket.io');
let io = socketIO(server);

console.log('connecting socket:');
io.on('connect', (socket) => {
  console.log('user connected');

  socket.on('Message_new', (msg) => {
    console.log('getting message:', msg);
    let data = { message: msg, name: 'Message_new' };
    io.emit('message', data);
  });

  socket.on('Event_new', (msg) => {
    console.log('getting message:', msg);
    let data = { message: msg, name: 'Event_new' };
    io.emit('message', data);
  });

  socket.on('Event_delete', (msg) => {
    console.log('getting message:', msg);
    let data = { message: msg, name: 'Event_delete' };
    io.emit('message', data);
  });
});

const routes = require('./routes/route');
const carMakeRoutes = routes.carMakeRoutes;
const carInfoRoutes = routes.carInfoRoutes;
const showRoomRoutes = routes.showRoomRoutes;
const eventRoutes = routes.eventRoutes;
const userRoutes = routes.userRoutes;
const groupRoutes = routes.groupRoutes;

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
};
app.use(cors(corsOptions));
const port = process.env.PORT || 4000;

app.use('/cms/carmake', carMakeRoutes);
app.use('/cms/carinfo', carInfoRoutes);
app.use('/cms/showroom', showRoomRoutes);
app.use('/event', eventRoutes);
app.use('/user', userRoutes);
app.use('/group', groupRoutes);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
