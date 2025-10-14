/**
 *  by using js built-in methods
 * @param {*} str
 * @return {*} reverse str
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hi"));
console.log(reverseString("ab-cd"));
console.log(reverseString("a-bC-dEf=ghlj!!"));
/**
 *  by using js traditional for-loop
 * @param {*} str
 * @return {*} reverse str
 */
function reverseString(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
console.log(reverseString("hi"));
console.log(reverseString("ab-cd"));
console.log(reverseString("a-bC-dEf=ghlj!!"));
/**
 *  by using js for-of loop
 * @param {*} str
 * @return {*} reverse str
 */
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverseString("hi"));
console.log(reverseString("ab-cd"));
console.log(reverseString("a-bC-dEf=ghlj!!"));

//method 2
/*var str = 'hello';
let reverseString = '';
for(let i = str.length - 1; i >= 0; i--){
    reverseString = reverseString + str[i];
}
console.log(reverseString);*/

//method 3
/*var str = 'hello';
let reverseString = '';
for(let i = 0; i <= str.length - 1; i++){
    reverseString = str[i] + reverseString;
}
console.log(reverseString);*/

//higher order method
/*var str = 'hello';
let reverseString = '';
str.split('').forEach(function(e){
    reverseString = e + reverseString;
});
console.log(reverseString);*/

//arrow function se kiya hua
/*let str = 'hello';
let reverseString = '';
str.split('').forEach(e => reverseString = e + reverseString);
console.log(reverseString);*/

//reduce method se kiya hua
/*str.split('').reduce((reverseString, e) => e + reverseString, '');
const output = str('hello');
console.log(output);*/
