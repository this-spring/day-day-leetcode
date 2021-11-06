/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let needFind = [];
  let len1 = nums1.length;
  let len2 = nums2.length;
  let p1 = 0;
  let p2 = 0;
  let sum = len1 + len2;
  let pos = -1;
  let res = [];
  nums1.push(Infinity);
  nums2.push(Infinity);
  if (sum % 2 == 0) {
      needFind = [sum / 2 - 1, sum / 2];
  } else {
      needFind = [(sum - 1) / 2];
  }
  while(needFind.length > 0) {
      let current = needFind.shift();
      while(1) {
          let item = 0;
          if (nums1[p1] >= nums2[p2]) {
              item = nums2[p2];
              p2 ++;
          } else {
              item = nums1[p1];
              p1 ++;
          }
          pos ++;
          if (pos === current) {
              res.push(item);
              break;
          }
      }
  }
  return res.length === 1 ? res[0] : (res[0] + res[1]) / 2;
};

// 上面简化版本
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let sum = nums1.length + nums2.length;
  let p1 = 0;
  let p2 = 0;
  let pos = -1;
  nums1.push(Infinity);
  nums2.push(Infinity);
   const findIndex = (target) => {
      while(1) {
         if (nums1[p1] >= nums2[p2]) {
            item = nums2[p2];
            p2 ++;
        } else {
            item = nums1[p1];
            p1 ++;
        }
        pos ++;
        if (pos === target) {
            return item;
        }  
      }
   }
  if ((sum % 2) == 0) {
      const targetValue = findIndex(sum / 2 - 1);
      const targetValue2 = nums1[p1] >= nums2[p2] ? nums2[p2] : nums1[p1];
      return (targetValue + targetValue2) / 2
  } else {
      return findIndex((sum - 1) / 2);
  }
};

