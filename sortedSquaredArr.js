const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7];
// const arr = [3, 2, 1, 4, 5, 4, 7, 6, 7];

const sortedSquaredArr = (intArr) => {
  let result = [];
  let sqrtArr = intArr.map((s) => Math.pow(s, 2));
  for (let i = 0; i < sqrtArr.length; i++) {
    result.push(sqrtArr[i]);
  }
  return result.filter((i, v) => result.indexOf(i) === v).sort((a, b) => a - b);
};
console.log(sortedSquaredArr(arr));
