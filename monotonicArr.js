// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 4, 3, 2, 1];
// const arr3 = [3, 2, 1, 4, 5];

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 2, 1, 4, 5];
// const arr3 = [5, 4, 3, 2, 1];

const arr1 = [3, 2, 1, 4, 5];
const arr2 = [5, 4, 3, 2, 1];
const arr3 = [1, 2, 3, 4, 5];

const checkIsArrayMonotonic = (arr) => {
  const inc = arr.every((v, i) => i === 0 || v >= arr[i - 1]);
  const dec = arr.every((v, i) => i === 0 || v <= arr[i - 1]);
  return inc === true ? true : dec === true ? true : false;
};
console.log(checkIsArrayMonotonic(arr1));
console.log(checkIsArrayMonotonic(arr2));
console.log(checkIsArrayMonotonic(arr3));
