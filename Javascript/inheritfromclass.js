const Square = require('./classwithmoreinstance');

class Square extends Rectangle {
	constructor (size) {
		super(size, size);
	}
}
module.exports = Square;
