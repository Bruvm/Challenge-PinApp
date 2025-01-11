import { IncomingMessage, ServerResponse } from 'http';
import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), '/mock/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req: IncomingMessage, res: ServerResponse) => {
  server.emit('request', req, res);
};
