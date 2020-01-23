const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur;
console.log(numArr.reduce(reducer, 100));

// Call stack
function first(callback) {
  return callback;
}

function callback(callTwo) {
  return "callTwo";
}

function callTwo() {
  let we = true;
  return "Hi";
}
console.log(first(callback(callTwo())));

const print = str => console.log(str);
print("Wajih");

function yello(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);
}
yello(2, 3);
function pink(name, age) {
  console.log(`hi ${name},you are very young ${age}`);
}
pink("Ali", 20);
const greeting = (name, add, age, pla) => {
  age += 20;
  name += ",";
  pla += "De";
  add += ",";
  return `hey ${name} it is very nice ${add}you are getting older ${age},is your old ${pla}`;
};
console.log(greeting("Ali", "xx str", 10, "Berlin"));

const add = () => {
  let x = 1120 * 3;
  console.log(x);
};
add();
