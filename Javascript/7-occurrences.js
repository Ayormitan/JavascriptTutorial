#!/usr/bin/node
const nboccurences = require('./numoccurence');

console.log(nboccurences([1, 2, 3, 4, 5, 6], 3));
console.log(nboccurences([3, 2, 3, 4, 5, 3, 3], 3));
console.log(nboccurences(["s", 12, "c", "s", "school", 8], "s"));
