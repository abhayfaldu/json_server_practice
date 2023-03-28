const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors())
server.use(middlewares)
server.use(router)

const port = 8080;
server.listen(port, () => {
  console.log('json server running on port:', port);
})