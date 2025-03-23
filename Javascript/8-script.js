$(document).ready(function() {
	let APIurl = "https://swapi-api.alx-tools.com/api/films/?format=json";

	$.getJSON(APIurl, function(data) {
		data.results.forEach(movie => {
		$("#list_movies").append(`${movie.title}<br>`);
		});
	}).fail(function() {
		$("#list_movies").append("error feching title")
	});
});
