// pages/api/products.ts
import { Request, ParamsDictionary, Response } from 'express-serve-static-core';
import { IncomingMessage, ServerResponse } from 'http';
import jsonServer from 'json-server';
import path from 'path';
import { ParsedQs } from 'qs';

const handler = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>> | IncomingMessage, res: Response<any, Record<string, any>, number> | ServerResponse<IncomingMessage>) => {

  const server = jsonServer.create();
  const router = jsonServer.router(path.resolve('../db.json')); 
  const middlewares = jsonServer.defaults();
  server.use(middlewares);
  server.use(router);
  server(req, res);
};

export default handler;
