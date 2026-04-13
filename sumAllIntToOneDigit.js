function countAllIntToOneDigit(num) {
    while (num >= 10) {
        let sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num
}
console.log(countAllIntToOneDigit(1234567890), 'count')
console.log(countAllIntToOneDigit(234567894), 'count')
console.log(countAllIntToOneDigit(987654310), 'count')


function sumAllIntToOneDigit(num) {
    let sum = 0;
    let arr = num.toString().split('')
    let result = arr.map(Number)
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        sum += element
    }
    return sum
}
console.log(sumAllIntToOneDigit(1234567890), 'sum')
console.log(sumAllIntToOneDigit(234567894), 'sum')
console.log(sumAllIntToOneDigit(987654310), 'sum')