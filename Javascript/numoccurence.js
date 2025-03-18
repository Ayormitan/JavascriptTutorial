function nboccurences (list, searchElement) {
	let count = 0;
	for (let item of list) {
		if (item === searchElement) {
			count++;
		}
	}
	return count;
}
module.exports = nboccurences;
