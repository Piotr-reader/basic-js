const CustomError = require("../extensions/custom-error");

let stack = [];
let flag = true;
const chainMaker = {
  getLength() {
    return stack.length;
  },
  addLink(value) {
    if (flag  === false) {
      flag  = true;
      while (stack.length) {stack.splice(0, stack.length)};
    }
    this.value = value;
    if (value === undefined) {
      stack.push(`(  )`);
    } else {
      stack.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    this.position = position;

    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > stack.length - 1
    ) {
      stack.splice(0,stack.length);
      throw new Error();
    }

    stack.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    stack = stack.reverse();
    return this;
  },
  finishChain() {
    flag = false;
    return stack.join("~~");
  },
};

module.exports = chainMaker;
