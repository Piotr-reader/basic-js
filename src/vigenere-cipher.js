const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = !direct;
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        };
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let result = [];
        let rightKey = [];


        let lettersMessage = [];
        let lettersKey = [];

        let sumNumbers = [];
        let resultChar = [];



        message = message.toLowerCase();
        for (let i = 0; i < message.length; i++) {
            if (~alphabet.indexOf(message[i])) {
                lettersMessage.push(alphabet.indexOf(message[i]));
            }
        }

        key = key.toLowerCase().split('');
        while (rightKey.length < lettersMessage.length) {
            rightKey.push(key[0]);
            key.push(key[0]);
            key.shift();
        }

        for (let i = 0; i < rightKey.length; i++) {
            lettersKey.push(alphabet.indexOf(rightKey[i]));
        }

        for (let i = 0; i < lettersMessage.length; i++) {
            sumNumbers.push(lettersMessage[i] + lettersKey[i]);
        }
        for (let i = 0; i < sumNumbers.length; i++) {
            if (sumNumbers[i] >= alphabet.length) {
                resultChar.push((alphabet[sumNumbers[i] - alphabet.length]).toUpperCase());
            } else {
                resultChar.push((alphabet[sumNumbers[i]]).toUpperCase());
            }
        }

        for (let i = 0; i < message.length; i++) {
            if (~alphabet.indexOf(message[i])) {
                result.push(resultChar[0]);
                resultChar.shift();
            } else {
                result.push(message[i]);
            }
        }

        if (this.direct === true) {
            return result.reverse().join('');
        } else {
            return result.join('');

        }

    }


    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error();
        }
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let result = [];
        let rightKey = [];

        let lettersMessage = [];
        let lettersKey = [];

        let sumNumbers = [];
        let resultChar = [];


        // lettersMessage
        encryptedMessage = encryptedMessage.toLowerCase();
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (~alphabet.indexOf(encryptedMessage[i])) {
                lettersMessage.push(alphabet.indexOf(encryptedMessage[i]));
            }
        }

        // rightKey
        key = key.toLowerCase().split('');
        while (rightKey.length < lettersMessage.length) {
            rightKey.push(key[0]);
            key.push(key[0]);
            key.shift();
        }

        // lettersKey
        for (let i = 0; i < rightKey.length; i++) {
            lettersKey.push(alphabet.indexOf(rightKey[i]));
        }


        // sumNumbers & resultChar
        for (let i = 0; i < lettersMessage.length; i++) {
            sumNumbers.push(lettersMessage[i] - lettersKey[i]);
        }
        for (let i = 0; i < sumNumbers.length; i++) {
            if (sumNumbers[i] < 0) {
                resultChar.push((alphabet[sumNumbers[i] + alphabet.length]).toUpperCase());
            } else {
                resultChar.push((alphabet[sumNumbers[i]]).toUpperCase());
            }
        }

        // result
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (~alphabet.indexOf(encryptedMessage[i])) {
                result.push(resultChar[0]);
                resultChar.shift();
            } else {
                result.push(encryptedMessage[i]);
            }
        }

        //  return
        if (this.direct === true) {
            return result.reverse().join('');
        } else {
            return result.join('');
        }
    }
}
// const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

module.exports = VigenereCipheringMachine;
