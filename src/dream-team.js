const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let team = [];

	if (!Array.isArray(members)) {
		return false;
	}
	members.map(item => {
		if (typeof item === 'string') {
			team.push(item.trim().charAt(0).toUpperCase());
		}
	})
	return team.sort().join('');
};
