// See https://github.com/typicode/json-server#module
import jsonServer from 'json-server';
import path from 'path';
import fs from 'fs';

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

export default server;
