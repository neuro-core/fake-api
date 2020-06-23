require('dotenv').config();

const ROUTES = process.env.ROUTES,
    PORT = process.env.PORT;
let rewritePostAsGet = false;
try {
    rewritePostAsGet = process.env.REWRITE_POST_AS_GET ? JSON.parse(process.env.REWRITE_POST_AS_GET) : false;
} catch (e) {

}

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(ROUTES);
const middlewares = jsonServer.defaults();

server.use(middlewares);
//######################################

if (rewritePostAsGet){
    server.use(jsonServer.bodyParser);

    server.use(function (req, res, next) {
        if (req.method === 'POST') {
            // Converts POST to GET and move payload to query params
            // This way it will make JSON Server that it's GET request
            req.method = 'GET';
            req.query = req.body
        }
        // Continue to JSON Server router
        next()
    });
}

//######################################
server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on: http://localhost:${PORT}`)
});
