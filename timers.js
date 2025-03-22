// set-timeout [output: promise, first log, next tick, immediate, time out]
// setTimeout(() => {
//   setInterval(() => {
//     console.log("interval");
//   }, 5000);
//   process.nextTick(() => {
//     console.log("next tick");
//   });
//   setImmediate(() => {
//     console.log("immediate");
//   });
//   const p1 = Promise.resolve("resolved");
//   console.log(p1, "promise");
//   console.log("first log");
// }, 0);

// set-interval [output: promise, first log, next tick, immediate, time out]
// setInterval(() => {
//   setTimeout(() => {
//     console.log("time out");
//   }, 0);
//   setImmediate(() => {
//     console.log("immediate");
//   });
//   process.nextTick(() => {
//     console.log("next tick");
//   });
//   const p1 = Promise.resolve("resolved");
//   console.log(p1, "promise");
//   console.log("first log");
// }, 5000);

// // set-immediate
// setImmediate(() => {
//   setTimeout(() => {
//     console.log("time out");
//   }, 5000);
//   setInterval(() => {
//     console.log("interval");
//   }, 5000);
//   process.nextTick(() => {
//     console.log("next tick");
//   });
//   const p1 = Promise.resolve("resolved");
//   console.log(p1, "promise");
//   console.log("first log");
// });

// // next-tick
// process.nextTick(() => {
//   setTimeout(() => {
//     console.log("time out");
//   }, 5000);
//   setInterval(() => {
//     console.log("interval");
//   }, 5000);
//   setImmediate(() => {
//     console.log("immediate");
//   });
//   const p1 = Promise.resolve("resolved");
//   console.log(p1, "promise");
//   console.log("first log");
// });

const timer = () => {
  setImmediate(() => {
    console.log("immediate");
  });
  process.nextTick(() => {
    console.log("next tick");
  });
  console.log("first log");
  console.log(Promise.resolve("first promise"));
  setTimeout(() => {
    console.log("time out");
  }, 0);
};
timer();
