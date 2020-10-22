const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date) {
		return 'Unable to determine the time of year!';
	}

	if (!date instanceof Date || isNaN(date)) {
		throw new Error();
	}

	let months = date.getMonth();

	if (months === 11 || months === 1 || months === 0) {
		return 'winter';
	} else if (months <= 4 && months >= 2) {
		return 'spring';
	} else if (months <= 7 && months >= 5) {
		return 'summer';
	} else if (months <= 10 && months >= 8) {
		return 'autumn';
	}
};
