/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  const res = [];
  let p1 = 0;
  let p2 = 0;
  while(p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] >= nums2[p2]) {
          res.push(nums2[p2]);
          p2 ++;
      } else {
          res.push(nums1[p1]);
          p1 ++;
      }
  }
  if (p1 < nums1.length) {
      for (;p1 < nums1.length; p1 ++) {
          res.push(nums1[p1]);
      }
  }
  if (p2 < nums2.length) {
      for (;p2 < nums2.length; p2 ++) {
          res.push(nums2[p2]);
      }
  }
  console.log(res);
  if (res.length % 2 === 0) {
       let index = res.length / 2;
      return (res[index] + res[index - 1]) / 2;
  } else {
      let index = (res.length - 1) / 2;
      return res[index];

  }
};


console.log(findMedianSortedArrays([1,2], [3,4]));