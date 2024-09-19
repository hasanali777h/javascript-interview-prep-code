function higherOrderFunction () {
    return function func () {
        console.log("higher order function");
    }
}
console.log(higherOrderFunction());