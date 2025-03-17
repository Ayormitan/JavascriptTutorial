#!/usr/bin/node
const Rectangle = require('./classwithmoreinstance');

const rec1 = new Rectangle(2, 3);
console.log('Normal:');
rec1.print();

console.log('Double');
rec1.double();
rec1.print();

console.log('Rotate');
rec1.rotate();
rec1.print();
