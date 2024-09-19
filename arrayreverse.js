//How do you reverse an array in place in JavaScript?
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.reverse();
console.log(x);
//without using builtin reverse() method
function reverseArr(input) {
  var ret = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}

var a = [3, 5, 7, 8];
var b = reverseArr(a);
console.log(b);
