const twoSum = (nums, target) => {
  const differences = new Map();
  const pairs = [];

  for (let num of nums) {
    if (differences.has(num)) {
      const pair = [num, differences.get(num)].sort((a, b) => a - b);
      pairs.push(pair);
    }

    differences.set(target - num, num);
  }

  return pairs.sort((a, b) => a[0] - b[0]);
};

const nums = [1,2,3,4,5,6,7,8,9];
console.log(twoSum(nums, 11));
