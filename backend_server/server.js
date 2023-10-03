const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = socketIo(server);

// Configuration de Socket.io ici

const socketPort = 3001;

server.listen(socketPort, () => {
  console.log(`Backend Socket.io en écoute sur le port ${socketPort}`);
});
