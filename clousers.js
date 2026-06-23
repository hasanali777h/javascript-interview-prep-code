// 'use strict';
// const init = () => {
//     const name = 'hasan';
//     const displayName = () => {
//         console.log(name);
//     }
//     return displayName
// }
// const func1 = init()
// func1()

// const init = () => {
//     const name = 'hasan';
//     return displayName = () => {
//         console.log(name);
//     }
// }
// const func1 = init()
// func1()

const makeAdder = (x) => {
    return (y) => {
        return x + y
    }
}

const addTwo = makeAdder(2)
const addTen = makeAdder(10)
console.log(addTwo(7));
console.log(addTen(5));