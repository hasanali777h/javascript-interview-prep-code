// Find the First Non-Repeating Character in a String

function firstNonRepeatedCharacter(str) {
  return str
    .split("")
    .filter(function (char, idx, obj) {
      return obj.indexOf(char) === obj.lastIndexOf(char);
    })
    .shift();
}

console.log(firstNonRepeatedCharacter("aabcbd"));
console.log(firstNonRepeatedCharacter("hasan"));
