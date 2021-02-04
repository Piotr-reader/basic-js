const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = 1;
  let additionRepeatTimes = 1;
  let addition = "";
  let additionSeparator = "|";
  let addSeparator = "+";
  let add = "";
  let result = "";
  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes;
  }
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (
    options.addition ||
    options.addition === false ||
    options.addition === null
  ) {
    addition = String(options.addition);
    if (options.additionSeparator) {
      additionSeparator = String(options.additionSeparator);
    }
  }
  if (options.separator) {
    addSeparator = String(options.separator);
  }

  add =
    String(str) +
    (addition + additionSeparator)
      .repeat(additionRepeatTimes)
      .slice(0, add.length - additionSeparator.length);

  result = (add + addSeparator)
    .repeat(repeatTimes)
    .slice(0, result.length - addSeparator.length);

  return result;
};
