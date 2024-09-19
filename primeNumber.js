function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}
const hasPrime = isPrime(97);
console.log(hasPrime);
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97