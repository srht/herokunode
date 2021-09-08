const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hayy hak!");
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
