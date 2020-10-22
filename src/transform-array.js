const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let result = [];

	if (!Array.isArray(arr)) {
		throw new Error();
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			if (i < arr.length - 1) {
				i++;
			}
		} else if (arr[i] === '--discard-prev') {
			if (arr[i - 2] !== '--discard-next') {
				result.pop();
			}
		} else if (arr[i] === '--double-next') {
			if (i + 1 < arr.length) {
				result.push(arr[i + 1]);
			}
		} else if (arr[i] === '--double-prev') {
			if (i > 0 && arr[i - 2] !== '--discard-next') {
				result.push(arr[i - 1]);
			}
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};
