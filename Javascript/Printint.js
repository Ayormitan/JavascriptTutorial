const args = process.argv.slice(2) // to parse command prompt argument slicing the first two i:e node and filename

let num = parseInt(args[0]); // convert first argument to an int

if (!isNaN(num)) { 
	console.log(`my number: ${num}`); // check and print if arg is a number
}
else {
	console.log("Not a number"); // If not a number
}
