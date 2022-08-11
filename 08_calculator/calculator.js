const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	let ans = 0;
  for(let val of array){
    ans +=val;
  }
  return ans;

};

const multiply = function(array) {
  let ans = 1;
  for(let val of array){
    ans*=val;
  }
  return ans;
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(val) {
	let ans = 1;
  for(let i = 1; i <= val; i++){
    ans*=i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
