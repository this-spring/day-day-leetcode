/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
  let ps = 0;
  let pd = 0;
  let res = '';
  dictionary = dictionary.sort();
  for (let i = 0; i < dictionary.length; i += 1) {
      const item = dictionary[i];
      while(ps < s.length && pd < item.length) {
          if (s[ps] === item[pd]) {
              pd ++;
          }
          ps ++;
      }
      if (pd === item.length) {
          res = item.length > res.length ? item : res;
      }
      ps = 0;
      pd = 0;
  }
  return res;
};