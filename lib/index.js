process.once("SIGINT", (...args) => {
	// in Node.js
	// args === [ "SIGINT", 2 ]

	// in Bun
	// args == [ 2 ]
	console.log("\nSIGINT", args);
	process.exit(0);
});
