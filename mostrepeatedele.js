// function mode(arr) {
//   return arr
//     .sort(
//       (a, b) =>
//         arr.filter((v) => +v === a).length - arr.filter((v) => +v === b).length
//     )
//     .pop();
// }

// console.log(mode([1, 2, 3, 4, 2, 2, 2, 3, 5, 2, 4]));
// console.log(mode([0,1,'2',2,3,5,9]));

const mostRepeatedEle = (arr) => {
  let result = [];
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      result.push(sortedArr[i + 1]);
    }
  }
  return result;
};
console.log(mostRepeatedEle([1, 2, 3, 4, "55", 6, 77, 8, 9, 55, 77]));
