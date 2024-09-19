function sumOfOddNums(start,end){
    let sum = 0;
    for(let i=start; i<=end; i+=2){
            sum += i
    }
    return sum;
}
console.log(sumOfOddNums(21,99));