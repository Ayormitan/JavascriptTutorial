exports.logMe = function (item) {
	for (let index = 0; index < arguments.length; index++) {
		console.log(`${arguments[index]}: (${index + 1})`);
	}
}
