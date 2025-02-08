function caesarCipher(text, rotations) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (c.match(/[a-zA-Z]/i)) {
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + rotations) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + rotations) % 26) + 97);
      }
    }
    output += c;
  }
  return output.replace(/\s/g, '');
}
console.log(caesarCipher("a little brown fox jumps over a lazy dog", 5));
console.log(caesarCipher("SDADSD ADASDSD FASFAFSAFA FASFSAFAFA", 5));
