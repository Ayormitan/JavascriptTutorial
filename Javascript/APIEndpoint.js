const request = require('request');
const movieId = process.argv[2];
const baseurl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(baseurl, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}
	if (response.statusCode !== 200) {
		return;
	}
	const data = JSON.parse(body);
	console.log("Title:", data.title);
});
