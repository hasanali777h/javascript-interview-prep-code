//How are duplicates removed from a given array in JavaScript?
var arr = ["banana", "apple", "orange", "lemon", "apple", "orange"];
function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr));
