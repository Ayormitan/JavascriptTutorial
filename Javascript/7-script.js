$(document).ready(function() {
	let APIurl = "https://swapi-api.alx-tools.com/api/people/5/?format=json";
		
	$.getJSON(APIurl, function(data) {
		$("#character").html(`${data.name}<br>${data.hair_color}`);
	}).fail(function() {
		$("#character").text("Error fetching character");
	});
});
