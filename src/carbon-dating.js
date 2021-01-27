const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let result = false;
  let activity = sampleActivity;
  let age = 0;
  if (sampleActivity !== "number" || sampleActivity === undefined ||sampleActivity === null) {
    result;
  } else {
    age.toString() = activity*(HALF_LIFE_PERIOD/MODERN_ACTIVITY);
    result = Math.celling(age);
  }
  return result;
};
