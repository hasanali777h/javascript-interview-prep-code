let ranks = ["A", "B", "C"];
ranks.forEach(function (e) {
  console.log(e);
});
function Counter() {
  this.count = 0;
  let self = this;
  return {
    increase: function () {
      self.count++;
    },
    current: function () {
      return self.count;
    },
    reset: function () {
      self.count = 0;
    },
  };
}
var counter = new Counter();
var numbers = [1, 2, 3];
var sum = 0;
numbers.forEach(function (e) {
  sum += e;
  this.increase();
}, counter);
console.log(counter);
console.log(sum);
