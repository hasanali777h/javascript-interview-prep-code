//method 1
/* function capitalizeLetters(str) {
   const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
} */

// method 2
/* function capitalizeLetters(str) { 
 return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");} */

// arrow function se kiya hua
/* function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
} */

//regex se kiya hua
/* function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
} */

//call function
const output = capitalizeLetters("i love javascript");
console.log(output);
