const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
console.log('jsonServer', jsonServer)
console.log('server', server)
console.log('router', router)
console.log('middlewares', middlewares)
server.use(middlewares);
server.use(router);

module.exports = server;

module.exports = server;
