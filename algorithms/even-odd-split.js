const split = (nums) => {
  for (let i = 0, wall = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      swap(nums, i, wall);
      wall++;
    }
  }

  return nums;
};

const swap = (array, i, j) => {
  let saved = array[i];
  array[i] = array[j];
  array[j] = saved;
};

console.log(split([2,1,3,5,10,5,7,6]));
console.log([1,1,1]);
console.log([2,4,6]);
