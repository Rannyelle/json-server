const jsonserver = requeri('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process . env. PORT || 8080;

server.use (middlewares);
Server.use(router);
Server.listen(port, () => {
console.log(`JSON Server está funcionando na porta ${port}`);
});