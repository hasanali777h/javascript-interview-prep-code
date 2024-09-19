function mathSequences(arr) {
  let arith = [];
  let geo = [];
  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.push(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.push(number2);
  }
  console.log(`A: ${arith}`);
  console.log(`B: ${geo}`);
}
mathSequences([2, 4, 6, 8])