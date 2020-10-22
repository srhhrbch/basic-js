const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(direct) {
		this.direction = direct === false ? 'reverse' : 'direct';
	}

	encrypt(message, key) {
		let result = [];

		key = key.toUpperCase();
		message = message.toUpperCase();

		if (!key || !message || key.length <= 0 || message.length <= 0) {
			throw new Error();
		}

		for (let i = 0, j = 0; i < message.length; i++) {
			let keyCode = key[j].charCodeAt(0);
			let messageCode = message[i].charCodeAt(0);

			if (!message[i].match(/[A-Z]/)) {
				result.push(message[i]);
				continue;
			}

			j++;

			if (j >= key.length) {
				j = 0;
			}

			let enc = String.fromCharCode((messageCode + keyCode) % 26 + 65);

			result.push(enc);
		}

		if (this.direction === 'reverse') {
			result.reverse();
		}

		return result.join('');
	}

	decrypt(encryptedMessage, key) {
		let result = [];

		key = key.toUpperCase();
		encryptedMessage = encryptedMessage.toUpperCase();

		if (!key || !encryptedMessage || key.length <= 0 || encryptedMessage.length <= 0) {
			throw new Error();
		}

		for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
			let keyCode = key[j].charCodeAt();
			let encryptedMessageCode = encryptedMessage[i].charCodeAt();

			if (!encryptedMessage[i].match(/[A-Z]/)) {
				result.push(encryptedMessage[i]);
				continue;
			}

			j++;

			if (j >= key.length) {
				j = 0;
			}

			let dec = String.fromCharCode((encryptedMessageCode + 26 - keyCode) % 26 + 65);

			result.push(dec);
		}

		if (this.direction === 'reverse') {
			result.reverse();
		}

		return result.join('');
	}
}

module.exports = VigenereCipheringMachine;
