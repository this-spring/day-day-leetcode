/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
  let a = 0;
  let b = Math.ceil(Math.sqrt(c));
  while(a <= b) {
      let aa = Math.pow(a, 2);
      let bb = Math.pow(b, 2);
      let sum = aa + bb;
      if (sum > c) {
          b--;
      } else if (sum < c) {
          a++
      } else {
          return true;
      }
  }
  return false;
};