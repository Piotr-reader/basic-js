const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    let depth = 0;
    if (Array.isArray(array)) {
      depth = 1;
      let maxDepth = 0;
      for (let i = 0; i < array.length; i++) {
        let d = this.calculateDepth(array[i]);
        if (d > maxDepth) {
          maxDepth = d;
        }
      }
      depth = depth + maxDepth;
    }
    return depth;
  }
};
