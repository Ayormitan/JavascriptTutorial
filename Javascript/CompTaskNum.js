const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}
	if (response.statusCode !== 200) {
		console.error(reponse.statusCode);
		return;
	}
	const tasks = JSON.parse(body);
	const completedtask = {};

	tasks.forEach(task => {
		if (task.completed) {
			if (!completedtask[task.userId]) {
				completedtask[task.userId] = 0;
			}
			completedtask[task.userId]++;
		}
	});
	// count and print task per user
	Object.keys(completedtask)
		.sort((a, b) => a - b)
		.forEach(userId => {
			console.log(`${userId}) completed ${completedtask[userId]}`);
	});
});
