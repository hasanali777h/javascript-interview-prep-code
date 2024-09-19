//How do you find the missing number in a given integer array of 1 to 100?
function getMissingNo(a, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= a[i];
  return total;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let n = arr.length;
let miss = getMissingNo(arr, n);
console.log(miss);
