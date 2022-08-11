const ftoc = function(value) {
 let ans = (value - 32) *(5/9);
  return +ans.toFixed(1);
};

const ctof = function(value) {
  let ans = (value * (9/5)) + 32;
  return +ans.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
