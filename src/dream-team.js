const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!members) {
    return false;
  }
  let memb = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      memb.push(members[i].trim().charAt(0));
    }
  }
  memb = memb.map(c => c.toUpperCase()).sort().join("");
  return memb;
};
