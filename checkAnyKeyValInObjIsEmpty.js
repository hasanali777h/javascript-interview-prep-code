const user = {
  firstname: "abc",
  lastname: "xyz",
  email: "abc@xyz.com",
  password: "pass1234",
  age: 33,
  active: true,
  // data: undefined,
  // val: null,
  // str: ''
};

const checkEmptyValueInObj = (obj) => {
  return Object.values(obj).some((o) => o == "" || o == undefined || o == null);
};
if (!checkEmptyValueInObj(user)) {
  console.log("hit the api");
} else {
  console.log("error");
}
console.log(checkEmptyValueInObj(user));
