const fs = require('fs');
const content = "python is cool"
fs.writeFile('Writeme', content, 'utf8', err => {
	if (err) {
		console.error(err);
		return;
	} else {
	console.log(content);
	}
});
