function reverseInteger(int){
    const revNum = int.toString().split('').reverse().join('');
    return parseInt(revNum) * Math.sign(int);
}
console.log(reverseInteger(-54));