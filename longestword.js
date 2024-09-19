var arr = [
  "first item",
  "second item is longer than the third one",
  "third longish item",
];

var length = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > length) {
    var length = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest);
