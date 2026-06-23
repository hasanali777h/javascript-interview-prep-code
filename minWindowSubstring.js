"use strict";

const minWindowSubstring = (strArr) => {
  let [str, target] = strArr;
  const need = [...target].reduce(
    (a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }),
    {},
  );
  let left = 0,
    start = 0;
  let count = target.length,
    min = Infinity;
  for (let right = 0; right < str.length; right++) {
    if (need[str[right]]-- > 0) count--;
    while (count === 0) {
      if (right - left + 1 < min) {
        min = right - left + 1;
        start = left;
      }
      if (++need[str[left++]] > 0) count++;
    }
  }
  return min === Infinity ? "" : str.slice(start, start + min);
};
const arr1 = ["aabcedffhgqlmj", "fdhglq"]; //dffhgql
const arr2 = ["aaffhkksemckelloe", "fhea"]; // affhkkse
const arr3 = ["ahffaksfajeeubsne", "jefaa"]; // aksfaje
console.log(minWindowSubstring(arr1));
console.log(minWindowSubstring(arr2));
console.log(minWindowSubstring(arr3));
