// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum of ‘k’ 
// consecutive elements in the array.

const findMaxSum = (nums, k) => {
  let maxSum = 0;
  let sum = 0;
  
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right++];

    if (right - left === k) {
      maxSum = Math.max(maxSum, sum);
      sum -= nums[left++];
    }
  }

  return maxSum;
};

console.log(findMaxSum([1,2,3,4,5], 3) === 12);
console.log(findMaxSum([9,3,14,6,2,1], 3) === 26);
console.log(findMaxSum([9,3,14,6,2,1], 2));