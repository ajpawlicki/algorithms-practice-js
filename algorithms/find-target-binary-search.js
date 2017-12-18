const findTarget = (target, nums) => {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
};

console.log(findTarget(1, [1,2,3,4,5]) === 0);
console.log(findTarget(2, [1,2,3,4,5]) === 1);
console.log(findTarget(3, [1,2,3,4,5]) === 2);
console.log(findTarget(4, [1,2,3,4,5]) === 3);
console.log(findTarget(5, [1,2,3,4,5]) === 4);
console.log(findTarget(0, [1,2,3,4,5]) === null);
console.log(findTarget(10, [1,2,3,4,5]) === null);
console.log(findTarget(5, [1,2,3,4]) === null);
console.log(findTarget(-1, [1,2,3,4]) === null);
console.log(findTarget(1, [1,2,3,4]) === 0);
console.log(findTarget(2, [1,2,3,4]) === 1);
console.log(findTarget(3, [1,2,3,4]) === 2);
console.log(findTarget(4, [1,2,3,4]) === 3);

const findTargetRecursiveTwoPointers = (target, nums, left = 0, right = nums.length - 1) => {
  const mid = Math.floor((left + right) / 2);

  if (target === nums[mid]) {
    return mid;
  } else if (left > right) {
    return null;
  } else if (target > nums[mid]) {
    return findTargetRecursive(target, nums, mid + 1, right);
  } else if (target < nums[mid]) {
    return findTargetRecursive(target, nums, left, mid - 1);
  }
};

const findTargetRecursive = (target, nums) => {
  const start = 0, end = nums.length - 1;
  const mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums.length <= 1) {
    return null;
  } else if (target > nums[mid]) {
    const right = findTargetRecursive(target, nums.slice(mid + 1));
    if (right === null) return null;
    return mid + 1 + right;
  } else {
    const left = findTargetRecursive(target, nums.slice(0, mid));
    if (left === null) return null;
    return left;
  }
};

// console.log(findTargetRecursive(1, [1,2,3,4,5]) === 0);
// console.log(findTargetRecursive(2, [1,2,3,4,5]) === 1);
// console.log(findTargetRecursive(3, [1,2,3,4,5]) === 2);
// console.log(findTargetRecursive(4, [1,2,3,4,5]) === 3);
// console.log(findTargetRecursive(5, [1,2,3,4,5]) === 4);
// console.log(findTargetRecursive(0, [1,2,3,4,5]) === null);
// console.log(findTargetRecursive(10, [1,2,3,4,5]) === null);
// console.log(findTargetRecursive(5, [1,2,3,4]) === null);
// console.log(findTargetRecursive(-1, [1,2,3,4]) === null);
// console.log(findTargetRecursive(1, [1,2,3,4]) === 0);
// console.log(findTargetRecursive(2, [1,2,3,4]) === 1);
// console.log(findTargetRecursive(3, [1,2,3,4]) === 2);
// console.log(findTargetRecursive(4, [1,2,3,4]) === 3);
