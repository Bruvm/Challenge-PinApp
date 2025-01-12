import { createServer } from 'http';
import { readFileSync } from 'fs';
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./bd.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default function handler(req, res) {
  const port = process.env.PORT || 3000;
  const serverInstance = createServer((req, res) => {
    server(req, res);
  });

  serverInstance.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
}
