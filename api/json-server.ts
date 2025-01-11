import express from 'express';
import jsonServer from 'json-server';
import path from 'path';

const app = express();
const router = jsonServer.router(path.join(__dirname, '../db.json'));
const middlewares = jsonServer.defaults();
console.log('router', router)
app.use(middlewares);
app.use('/api', router); 
app.listen(3001, () => {
  console.log('JSON Server is running at http://localhost:3001');
});
