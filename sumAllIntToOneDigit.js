function sumAllIntToOneDigit(num){
    while (num>=10) {
        let sum = 0
        while (num>0) {
            sum += num%10
            num = Math.floor(num/10)
        }
        num = sum
    }
    return num
}
console.log(sumAllIntToOneDigit(1234567890))
console.log(sumAllIntToOneDigit(234567894))
console.log(sumAllIntToOneDigit(987654310))