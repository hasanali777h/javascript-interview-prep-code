//How do you find all pairs of an integer array whose sum is equal to a given number?
let twoSum = (array, sum) => {
  let hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  return results;
};
console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 60));
//sum of array elements
function arrayElementSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }
  return total;
}
console.log(arrayElementSum([1, 2, 3, 4, 10, 11]));
