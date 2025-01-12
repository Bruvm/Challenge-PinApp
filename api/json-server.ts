import jsonServer from 'json-server';
import path from 'path';

const router = jsonServer.router(path.join(process.cwd(), 'db.json'));
const middlewares = jsonServer.defaults();

export default async function handler(req: any, res: any) {
  const server = jsonServer.create();
  server.use(middlewares);
  server.use(router);
  server(req, res);
}
