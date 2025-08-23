const rotatingArr = [1, 2, 3, 4, 5, 6, 7];

const rotateArrEle = (arr, fromIndex, toIndex) => {
  let newArr = [...arr];
  const elements = newArr.splice(fromIndex, 1)[0];
  //   const element = newArr.splice(fromIndex - (fromIndex > removeIndex ? 1 : 0), 1)[0];
  newArr.splice(toIndex, 0, elements);
  return newArr;
};
console.log(rotateArrEle(rotatingArr, 2, 4));
