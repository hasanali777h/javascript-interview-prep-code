// const number = 8
// let n1=0, n2=1, nextTerm;
// console.log('Fibonacci series: ');
// for (let i = 0; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1+n2;
//     n1=n2;
//     n2=nextTerm;

// }
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(10));