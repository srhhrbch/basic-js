const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let result = 0;

		if (!Array.isArray(arr)) {
			return 0;
		} else {
			arr.forEach(item => {
				result = Math.max(this.calculateDepth(item), result);
			});
		}
		return result + 1;
	}
};
