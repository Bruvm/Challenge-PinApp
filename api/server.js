const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
    const db = router.db;
    const { sku } = req.params; 
  
    if (req.method === 'GET' && req.path.startsWith('/products/') && sku) {
      const product = db.get('products').find({ sku }).value();
  
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
    }
  
    next();
  });

server.use(jsonServer.rewriter({
    '/products/*': '/products/:sku',
    '/api/*': '/$1'
}))
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server


const jsonServer = require('json-server');
