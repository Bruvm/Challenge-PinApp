import jsonServer from 'json-server';
import { createServer } from 'http';

const dbFile = './bd.json';
const router = jsonServer.router(dbFile);
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = (req, res) => {
  return server(req, res);
};

export default handler;
