function findRepeatedNumbers(arr) {
  const numCount = {};
  const repeatedNumbers = [];
  for (let num of arr) {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  }
  for (let num in numCount) {
    if (numCount[num] > 1) {
      repeatedNumbers.push(+num);
    }
  }
  return repeatedNumbers;
}
const numbers = [0, 1, "2", 2, 3, 5, 9];
const result = findRepeatedNumbers(numbers);
console.log(result);
