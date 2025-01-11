import jsonServer from 'json-server';
import path from 'path';

const router = jsonServer.router(path.join(process.cwd(), 'db.json'));
const middlewares = jsonServer.defaults();

export default function handler(req, res) {
  const server = jsonServer.create();
  server.use(middlewares);
  server.use(router);
  server.listen(3000, () => {
    console.log('JSON Server is running');
  });
}
