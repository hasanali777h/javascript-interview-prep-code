// function findRepeatedNumbers(arr) {
//   const numCount = {};
//   const repeatedNumbers = [];
//   for (let num of arr) {
//     if (numCount[num]) {
//       numCount[num]++;
//     } else {
//       numCount[num] = 1;
//     }
//   }
//   for (let num in numCount) {
//     if (numCount[num] > 1) {
//       repeatedNumbers.push(+num);
//     }
//   }
//   return repeatedNumbers;
// }
// const numbers = [0, 1, "2", 2, 3, 5, 9];
// const result = findRepeatedNumbers(numbers);
// console.log(result);

// // condition working checking
// let a = 1;
// let b = 2;

// console.log(a || b);
// console.log(a && b);

// const schema = [
//   { id: 1, std_Id: 1, course_name: "py", marks: 90 },
//   { id: 2, std_Id: 2, course_name: "c#", marks: 90 },
//   { id: 3, std_Id: 3, course_name: "js", marks: 90 },
//   { id: 4, std_Id: 2, course_name: "go", marks: 90 },
//   { id: 5, std_Id: 2, course_name: "c++", marks: 90 },
//   { id: 6, std_Id: 1, course_name: "ror", marks: 90 },
//   { id: 7, std_Id: 1, course_name: "java", marks: 90 },
//   { id: 8, std_Id: 3, course_name: "ts", marks: 90 },
//   { id: 9, std_Id: 1, course_name: "html", marks: 90 },
//   { id: 10, std_Id: 1, course_name: "react", marks: 90 },
// ];
// // making result of single student
// const results = schema.filter((v) => {
//   return v.std_Id === 1;
// });
// console.log(results, "results");
// const total = results.reduce((acc, curr) => {
//   return acc + curr.marks;
// }, 0);
// console.log(total, "total");

// //pereventing other developer to add str value to age property
// const obj = {};
// Object.defineProperty(obj, "age", {
//   get() {
//     return this._age;
//   },
//   set(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Age must be a number");
//     }
//     this._age = value;
//   },
//   enumerable: true,
// });

// obj.age = 40;
// console.log(obj.age); // 40
// obj.age = "forty"; // ❌ TypeError: Age must be a number

// console.log(!(25 > 25));
