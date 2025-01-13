const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server(req, res);
};
