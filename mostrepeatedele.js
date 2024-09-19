function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => +v === a).length - arr.filter((v) => +v === b).length
    )
    .pop();
}

console.log(mode([1, 2, 3, 4, 2, 2, 2, 3, 5, 2, 4]));
console.log(mode([0,1,'2',2,3,5,9]));
