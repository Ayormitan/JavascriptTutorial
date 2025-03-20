const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const loripsum = process.argv[3]

request.get(url, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}
	if (response.statusCode !== 200) {
		console.log(`error: ${response.statusCode}`);
		return;
	}

	fs.writeFile(loripsum, body, 'utf8', (err) => {
		if (err) {
			return;
		}
		console.log(`${loripsum}`);
	});

});
