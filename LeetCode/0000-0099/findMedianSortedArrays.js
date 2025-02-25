/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let number = nums1.concat(nums2).sort((a, b) => a - b);
    let len = number.length;
    let index = Math.floor(len/2);
    if (len % 2 === 0) {
        return (number[index - 1] + number[index]) / 2;
    } else {
        
        return number[index];
    }
};

let res = findMedianSortedArrays([1, 2], [4]);
console.log(res)