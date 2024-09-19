const findSecondLargest = (arr) => {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted[arr.length - 2];
}
console.log(findSecondLargest([1111, 300, 2202202]));