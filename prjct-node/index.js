require("../lib/index");
const http = require("node:http");

const server = http.createServer((req, res) => {
	res.write("Node!");
	res.end();
});

server.listen(3001, () => {
	console.log("Server started on http://localhost:3001/ (Node.js)");
});
