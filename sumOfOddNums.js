function sumOfOddNums(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum;
}
console.log(sumOfOddNums(21, 99));
console.log(sumOfOddNums(2, 8));
console.log(sumOfOddNums(0, 0));
console.log(sumOfOddNums(null, 0));
console.log(sumOfOddNums(0, undefined));