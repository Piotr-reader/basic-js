const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: this.turns,
    seconds: this.seconds,
  };
  result.turns = Math.pow(2, disksNumber) - 1;
  let speed = (result.turns/(turnsSpeed * 1000/3600))*1000;
  result.seconds = Math.floor(speed);
  return result;
}