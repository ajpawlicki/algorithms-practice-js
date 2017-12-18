const nestedArray = [1,2,[[3,[[[4]],[[[5]]]]]]];

const flattenIterative = (arr) => {
  const flattenedArray = [];

  while (arr.length) {
    let shifted = arr.shift();

    if (!Array.isArray(shifted)) {
      flattenedArray.push(shifted);
    } else {
      arr = shifted.concat(arr);
    }
  }

  return flattenedArray;
};

// console.log(flattenIterative(nestedArray));

const flattenRecursive = arr => {
  if (!Array.isArray(arr)) return arr;

  let flattened = [];
  
  for (let i = 0; i < arr.length; i++) {
    flattened = flattened.concat(flattenRecursive(arr[i]));
  }

  return flattened;
};

// console.log(flattenRecursive(nestedArray));

const flattenReduce = arr => {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenReduce(curr) : curr);
  }, []);
};

console.log(flattenReduce(nestedArray));
