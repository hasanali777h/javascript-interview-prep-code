function evenOdd(num){
    let result = ['even','odd']
    return result[num%2]
}
console.log(evenOdd("3"))
console.log(evenOdd("4"))
console.log(evenOdd("5"))
console.log(evenOdd("8"))
console.log(evenOdd("0"))
console.log(evenOdd("3"))
console.log(evenOdd("11111"))
