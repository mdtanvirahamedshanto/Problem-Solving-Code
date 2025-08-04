/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b); // sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicates values for i
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        // found a triplet
        result.push([nums[i], nums[left], nums[right]]);
        //skip duplicate valuse for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++; // need a bigger number
      } else {
        right--; // need a smaller number 
      }
    }
  }

  return result;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
