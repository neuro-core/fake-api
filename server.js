require('dotenv').config();

const ROUTES = process.env.ROUTES,
    PORT = process.env.PORT;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(ROUTES);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on: http://localhost:${PORT}`)
});
