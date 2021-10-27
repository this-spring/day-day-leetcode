/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  const find = (i, j) => {
      while(i <= j) {
          if (s[i] !== s[j]) {
              start = i;
              end = j;
              return false
          };
          i ++;
          j --;
      }
      return true;
  }
  if (!find(start, end)) {
      let reStart = start;
      let reEnd = end;
      return find(reStart + 1, reEnd) || find(reStart, reEnd - 1);
  }
  return true;
};