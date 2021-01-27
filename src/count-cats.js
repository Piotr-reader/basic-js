const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  let cats = [];
  let sample = "^^";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i] === sample || matrix[i][j] === sample) {
        cats.push(matrix[i][j]);
        result = cats.length;
      }
    }
  }
  return result;
};
