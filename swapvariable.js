const swapVariables = (a,b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
swapVariables(50,30);
