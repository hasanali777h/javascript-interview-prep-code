const curry = (a) => (b) => (c) =>  a + b + c;
console.log(curry(1)(2)(3));
const sum1 = curry(1);
const sum2 = sum1(2);
const sum3 = sum2(3);
console.log(sum3)