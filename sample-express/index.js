// 1) Import the Express module
const express = require('express');

// 2) Create an Express application
const server = express();

// 3) Define a port to listen on
const port = 3000;

// 4) Set up a route (GET request handler) at /hello
server.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// 5) Start the server and log a message when it’s up
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
