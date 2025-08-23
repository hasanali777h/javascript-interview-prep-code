const sentence = "A quick brown fox jumps over a lazy dog.";

const reversingTheSentence = (str) => {
  let result = "";
  const splittedStr = str.split("");
  for (let i = 0; i <= splittedStr.length - 1; i++) {
    result = splittedStr[i] + result;
  }
  return result;
};
console.log(reversingTheSentence(sentence));
