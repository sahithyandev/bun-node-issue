# Bun-Node incompatibilty testing

I hit this issue after I migrated one of my projects (which uses express, and prisma) Node.js (v20.8.0) to Bun (v1.1.7). Although it's not a severe issue on my side, I thought it would be good to have a reproduction.

```js
process.once("SIGINT", (...args) => {
	// in Node.js
	// args is [ "SIGINT", 2 ]

	// in Bun
	// args is [ 2 ]
	console.log("\nSIGINT", args);
	process.exit(0);
});
```

## To test

### For Bun

```sh
cd prjct-bun
bun install
bun index.js

# Hit Ctrl-C to see the output
```

### For Node

```sh
cd prjct-node
npm install
node index.js

# Hit Ctrl-C to see the output
```
