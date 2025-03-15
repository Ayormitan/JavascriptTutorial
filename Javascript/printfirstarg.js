const args = process.argv.slice(2)
if (args.length == 0) {
	console.log("no arguments passed");
} else {
	console.log(args[0]);
}
