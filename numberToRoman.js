function convertToRoman(num) {
    const romanNumerals = [
        { key: 1000, value: "M" },
        { key: 900, value: "CM" },
        { key: 500, value: "D" },
        { key: 400, value: "CD" },
        { key: 100, value: "C" },
        { key: 90, value: "XC" },
        { key: 50, value: "L" },
        { key: 40, value: "XL" },
        { key: 10, value: "X" },
        { key: 9, value: "IX" },
        { key: 5, value: "V" },
        { key: 4, value: "IV" },
        { key: 1, value: "I" }
    ];
    
    let roman = "";
    
    for (const { key, value } of romanNumerals) {
        while (num >= key) {
            roman += value;
            num -= key;
        }
    }
    
    return roman;
}

console.log(convertToRoman(1))
console.log(convertToRoman(2))
console.log(convertToRoman(10))
console.log(convertToRoman(3))
console.log(convertToRoman(6))
console.log(convertToRoman(7))
console.log(convertToRoman(8))
console.log(convertToRoman(11))
console.log(convertToRoman(12))
console.log(convertToRoman(13))
console.log(convertToRoman(14))
console.log(convertToRoman(15))
console.log(convertToRoman(16))
console.log(convertToRoman(17))
console.log(convertToRoman(18))
console.log(convertToRoman(19))
console.log(convertToRoman(20))
console.log(convertToRoman(21))