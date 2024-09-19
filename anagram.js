function anagram(str1, str2){
    let newStr1 = str1.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('');
    let newStr2 = str2.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('');
    return newStr1 === newStr2;
}
console.log(anagram('test','etts'));