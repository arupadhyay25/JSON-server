// const data = require("./db.js");

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router(data);
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const PORT = 3000;
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router);
server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`));
