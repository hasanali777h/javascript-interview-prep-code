const arr = [1, 2, 3, 4, 10, 9, 8, 9, 10, 11, 7];
let results = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i + 1] == arr[i] + 1 && arr[i + 2] == arr[i] + 2) {
    results.push(i);
    while (arr[i] + 1 == arr[i + 1]) i++;
  }
}
console.log(results);
