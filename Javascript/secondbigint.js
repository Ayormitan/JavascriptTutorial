const args = process.argv.slice(2);
let num = parseInt(args);

if (num == 0 || num == 1) {
	console.log(0);
} else {
	let sorted = [...new Set(args)].sort((a, b) => b - a);
	console.log(sorted[1])
}
