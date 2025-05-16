const num1 = [1, 2, 3, 5, 6, 9, 10];
const num2 = [3, 4, 5, 7, 8];

const findMissingNumberInSecondArray = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr1[i]);
    }
  }
  return result;
};
console.log(findMissingNumberInSecondArray(num1, num2));
