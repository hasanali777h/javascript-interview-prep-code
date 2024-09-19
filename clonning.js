/* primitives */
/*
1-undefined
2-boolean
3-Number
4-string
5-bigInt
6-symbol
*/
let x = 2
let y = x
y += 1
console.log(y) // y add 1 to the value
console.log(x) // x value still the same even y = x
// primitives are immutables
let myName = "Dave"
myName[0] = "w"
console.log(myName)
// reasignment is possible
myName = "David"
console.log(myName)
/* reference type */
/*
1-Objects: (new) object, array, Map, set, weakMap, weakSet, date, null
2-functions
*/
let xarr = [1,2,3]
let yarr = xarr
yarr.push(4)
console.log(yarr)
console.log(xarr)
// reference type are mutable 
yarr[0] = 9
console.log(yarr)
console.log(xarr)
// clonning in JS
/* Shallow copy*/
// by spread operator
const zarr = [...yarr,10]
console.log(zarr)
console.log(yarr)
console.log(xarr)
console.log(yarr === xarr)
console.log(zarr === yarr)
// by object.assign()
const tarr = Object.assign([],zarr)
console.log(tarr)
console.log(tarr === zarr)
tarr.push(11)
console.log(tarr)
console.log(zarr)
// nested refererence type still shares the reference
yarr.push([7,8,9])
const varr = [...yarr]
console.log(varr)
varr[4].push(5)
console.log(varr)
console.log(yarr)
// array.from and slice also creates shallow copies

/* Deep Copy*/
// libraries uesd for this are lodash, ramada and other buitj-in functions of libraries
// deep copy in vanilla javascript but does not work with dates, functions, imageData, undefined, infinity, regEx, blob, files and other complex data

const scoreObj = {
    "first":44,
    "second":12,
    "third":{"a":1,"b":2}
}

const newScoreObj = JSON.parse(JSON.stringify(scoreObj))
console.log(newScoreObj)
console.log(newScoreObj === scoreObj)

const deepClone = (obj) => {
    if(typeof obj !== "object" || obj === null) return obj;
    const newObject = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        const val = obj[key]
        newObject[key] = deepClone(val)
    }
    return newObject
}

console.log(deepClone(scoreObj))
console.log(deepClone(scoreObj) === scoreObj)