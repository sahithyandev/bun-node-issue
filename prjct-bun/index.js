require("../lib/index");

Bun.serve({
	fetch(req) {
		return new Response("Bun!");
	},
});
console.log("Server started on http://localhost:3000 (Bun)");
