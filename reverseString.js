/**
 *  by using js built-in methods
 * @param {*} str
 * @return {*} reverse str
 */
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('hi'));
/**
 *  by using js traditional for-loop
 * @param {*} str
 * @return {*} reverse str
 */
function reverseString(str){
    let reversed = '';
    for(let i=0;i<str.length;i++){
        reversed = str[i] + reversed
    }
    return reversed;
}
console.log(reverseString('hi'))
/**
 *  by using js for-of loop
 * @param {*} str
 * @return {*} reverse str
 */
function reverseString(str){
    let reversed = '';
    for(let char of str){
        reversed = char + reversed
    }
    return reversed;
}
console.log(reverseString('hi'))