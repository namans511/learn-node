const http = require("http");

function rqServer(req, res) {
  console.log(req);
  process.exit();
}

const server = http.createServer(rqServer);

server.listen(3000);
