function reverseInt(int){
    const revserseString = int.toString().split('').reverse().join('');
    return parseInt(revserseString) * Math.sign(int);
}

//call function
const output = reverseInt(-12345);
console.log(output);