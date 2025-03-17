const args = process.argv.slice(2);
let num = parseInt(args[0])

function printfactorial(num) {
	if (isNaN(num))
		return 1;
	if (num == 1 || num == 0)
		return 1;
	return num * printfactorial(num - 1);
}

console.log(printfactorial(num));
