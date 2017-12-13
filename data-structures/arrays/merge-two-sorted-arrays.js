const merge = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;

  let mergedArray = [];
  
  let i = 0;
  let j = 0;

  while(i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
};

console.log(merge([8], [2]));
console.log(merge([1,2,3], []));
console.log(merge([1,2], [1,5,6]));
console.log(merge([1,2,7], [3,11]));
console.log(merge([], []));
console.log(merge({}, []));
console.log(merge('a', 1));
