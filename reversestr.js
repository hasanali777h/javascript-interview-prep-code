//method 1
/*function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));*/

//method 2
/*var str = 'hello';
let reverseString = '';
for(let i = str.length - 1; i >= 0; i--){
    reverseString = reverseString + str[i];
}
console.log(reverseString);*/

//method 3
/*var str = 'hello';
let reverseString = '';
for(let i = 0; i <= str.length - 1; i++){
    reverseString = str[i] + reverseString;
}
console.log(reverseString);*/

//modren method
/*var str = 'hello';
let reverseString = '';
for(let i of str){
    reverseString = i + reverseString;
}
console.log(reverseString);*/

//higher order method
/*var str = 'hello';
let reverseString = '';
str.split('').forEach(function(e){
    reverseString = e + reverseString;
});
console.log(reverseString);*/

//arrow function se kiya hua
/*let str = 'hello';
let reverseString = '';
str.split('').forEach(e => reverseString = e + reverseString);
console.log(reverseString);*/

//reduce method se kiya hua
/*str.split('').reduce((reverseString, e) => e + reverseString, '');
const output = str('hello');
console.log(output);*/