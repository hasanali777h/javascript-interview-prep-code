//How do you find the duplicate number on a given integer array?
const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
//console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);
console.log(findDuplicates(duplicatedArray));
