const request = require('request');
const charid = "18"
const url = `https://swapi-api.alx-tools.com/api/films/`;

request(url, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}
	if (response.statusCode !== 200) {
		return;
	}
	const data = JSON.parse(body);
	const characters = data.characters;

	const count = characters.filter(url => {
		const id = url.split("/").slice(-2, -1)[0];
		return id === charid;
	}).length;
	console.log(`${count}`);
});
