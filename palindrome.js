/*function isPalindrome(str){
    const revString = str.split('').reverse().join('');
    return revString === str;
}*/

//call function
// const output = isPalindrome("racecar");
// console.log(output);

const isPalindrome = (str) => {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  return reverse == str ? "palindrome" : "not palindrome";
};
console.log(isPalindrome("madam"));
