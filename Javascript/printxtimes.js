const args = process.argv.slice(2);
const string = parseInt(args[0]);

if (string > 0) {
let x = 0;
	while (x < string) {
		console.log("C is fun");
		x++;
	}
} else {
	console.log("Missin number of occurence");
}
