function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
    let len = Number(arr.length);
    // let len = arr.length;
  while (len--) {
    min = arr[len] < min ? arr[len] : min;
    max = arr[len] > max ? arr[len] : max;
  }
  return { min, max };
}
console.log(getMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getMinMax(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]));
