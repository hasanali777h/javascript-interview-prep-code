const revByKeepPattaren = (str) => {
  const letters = str
    .split("")
    .filter((ch) => /[a-zA-Z]/.test(ch))
    .reverse();
  let result = "";
  let letterIndex = 0;
  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      result += letters[letterIndex++];
    } else {
      result += ch;
    }
  }
  return result;
};
console.log(revByKeepPattaren("ab-cd"));
console.log(revByKeepPattaren("a-bC-dEf=ghlj!!"));
