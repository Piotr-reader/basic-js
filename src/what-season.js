const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw Error();
  }
  let month = date.getMonth();

  if (month <= 1 || month >= 11) {
    result = "winter";
  } else if (month >= 5 && month < 8) {
    result = "summer";
  } else if (month >= 8 && month < 11) {
    result = "autumn";
  } else if (month > 1 && month < 5) {
    result = "spring";
  }

  return result;
};
