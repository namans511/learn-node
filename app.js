const http = require("http");
const { Buffer } = require("buffer");

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("in another middleware!");
  res.send("<h1>whooo wo using express now</h1>");
});

const server = http.createServer(app);

server.listen(3000);
