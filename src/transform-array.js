const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let scipPrev = false;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i = i + 1;
      scipPrev = true;
      continue;
    } else if (arr[i] === "--double-next") {
      if (i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && !scipPrev) {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] === "--discard-prev") {
      if (i > 0 && !scipPrev) {
        result.pop();
      }
    } else {
      result.push(arr[i]);
    }
    scipPrev = false;
  }

  return result;
};
