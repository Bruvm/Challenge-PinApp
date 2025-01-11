import { NextApiRequest, NextApiResponse } from 'next';
import jsonServer from 'json-server';
import path from 'path';

const router = jsonServer.router(path.join(process.cwd(), 'db.json'));
const middlewares = jsonServer.defaults();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const server = jsonServer.create();

  server.use(middlewares);
  server.use(router);

  server(req as any, res as any, (err?: any) => {
    if (err) {
      console.error('Error interno del servidor:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
}

