function kfloor(num,k){
    const result = num - num%k
    return result
}
console.log(kfloor(15,2))
console.log(kfloor(9,6))
console.log(kfloor(12,7))
console.log(kfloor(34,10))
console.log(kfloor(74,12))