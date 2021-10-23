/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let p1 = m + n - 1;
  let pm = m - 1;
  let pn = n - 1;
  while(pm >= 0 && pn >= 0) {
      const vm = nums1[pm];
      const vn = nums2[pn];
      if (vn > vm) {
          nums1[p1] = vn;
          pn --;
      } else {
          nums1[p1] = vm;
          pm --;
      }
      p1 --;
  }
  if (pn >= 0) {
      for (;pn >=0 ; pn --) {
          nums1[p1] = nums2[pn];
          p1 --;
      }
  }
};