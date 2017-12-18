const threeSum = (nums, target = 0) => {
  const combinations = [];
  
  for (let i = 0; i < nums.length; i++) {
    const differences = new Map();
    const newTarget = target - nums[i];
    
    for (let j = i + 1; j < nums.length; j++) {
      if (differences.has(nums[j])) {
        combinations.push([nums[i], nums[j], differences.get(nums[j])]);
      }

      differences.set(newTarget - nums[j], nums[j]);
    }
  }

  return combinations;
};

console.log(threeSum([1,2,3,-1,-2,-3,-5]));
console.log(threeSum([5,-2,6,7,-3,-4]));
