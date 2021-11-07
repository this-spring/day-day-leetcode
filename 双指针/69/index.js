/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  if (x == 0) return x;
  let start = 1, end = x, mid = 0, sqrt = 0;
  while(start <= end) {
      mid = start + parseInt((end - start) / 2);
      sqrt = parseInt(x / mid);
      if (sqrt == mid) {
          return mid
      } else if (sqrt > mid) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return end
};