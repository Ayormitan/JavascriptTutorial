const args = process.argv.slice (2);

if (args.length == 0) {
	console.log("no argument passed");
} else if (args.length == 1) {
	console.log("Argument passed");
} else {
	console.log("More Argument passed");
}
