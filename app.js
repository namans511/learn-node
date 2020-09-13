const http = require("http");
const { Buffer } = require("buffer");

const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
