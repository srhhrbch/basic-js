const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let master = [];
	let addition = '';
	let separator = options.separator ? options.separator : '+';
	let additionalSeporator = options.additionSeparator ? options.additionSeparator : '|';
	let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
	let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

	if (typeof (options.addition) === "undefined") {
		addition;
	} else {
		addition = options.addition + '';
	}

	for (let i = 0; i < repeatTimes; i += 1) {
		let seporator = [];

		for (j = 0; j < additionRepeatTimes; j += 1) {
			seporator.push(addition);
		}
		master.push(str + seporator.join(additionalSeporator));
	}
	return (master.join(separator));
};
