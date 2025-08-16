const data = [
  {
    name: "Item 1",
    children: [
      {
        name: "Subitem 1.1",
        children: [
          { name: "Subsubitem 1.1.1", children: ["children1.1", "children2.1", "children3.1"] },
          { name: "Subsubitem 1.1.2", children: ["children4.1", "children5.1", "children6.1"] },
        ],
      },
      { name: "Subitem 1.2", children: ["children7.1", "children8.1", "children9.1"] },
    ],
  },
  {
    name: "Item 2",
    children: [
      { name: "Subitem 2.1", children: ["children2.1", "children2.2", "children2.3"] },
      { name: "Subitem 2.2", children: ["children2.2.1", "children2.2.2", "children2.2.3"] },
    ],
  },
];

// console.log(data);
// function findValue(obj, target) {
//   if (Array.isArray(obj)) {
//     for (let item of obj) {
//       const result = findValue(item, target);
//       if (result) return result;
//     }
//   } else if (typeof obj === "object" && obj !== null) {
//     if (obj.name === target) return obj.name; // (if searching by name property)
//     if (Array.isArray(obj.children)) {
//       for (let child of obj.children) {
//         const result = findValue(child, target);
//         if (result) return result;
//       }
//     }
//   } else if (obj === target) {
//     return obj; // Found the string directly
//   }
//   return null;
// }

// console.log(findValue(data, "children6.1"));

for (let obj of data) {
  if (
    obj.children &&
    obj.children[0] &&
    obj.children[0].children &&
    obj.children[0].children[1] &&
    Array.isArray(obj.children[0].children[1].children)
  ) {
    const result = obj.children[0].children[1].children[2];
    console.log(result);
  }
}
