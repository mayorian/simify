const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const INDEX = "public/index.html";


// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

const server = app
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(8080, () => console.log(`Listening on ${port}`));

// use websocket core module within http server
const { Server } = require("ws");

// instance of websocket module - opened within http server
const wsServer = new Server({ server }); 