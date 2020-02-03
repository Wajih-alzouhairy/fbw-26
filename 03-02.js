// functions inside functions
function main(num, num2) {
  // outer function

  function second(n) {
    // inner function is private for outer function

    return n * n; // 3 * 3 = 9
  }
  return second(num) + second(num2);
}

//  9   +    16

console.log(main(3, 4)); // 25

console.log(".........end...........");
// Nested scopes : Acessing outer global variables
const outerFunction = (x, y) => {
  let big = true; // big is global variable for this function
  console.log(big + "outerFunction"); // true
  const innerFunction = num => {
    big = false;
    console.log(big + "innerFunction"); //false
    return num + 10; //
  };
  return innerFunction(x) + innerFunction(y); //  (3 + 10) + (4 + 10) = 27
};
console.log(outerFunction(3, 4)); // 27
console.log(".........end...........");
///////////////////////////////////////////
// closure  //  a closure gives you access to an outer function’s scope from an inner function.
var number = 10;
function fun() {
  return number + number;
}
console.log(fun()); // 20
console.log(number); // 10
console.log(".........end...........");
// invoking == calling
const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})(); // () self invoking
add(); // 1
add(); // 2
add(); // 3
console.log(add()); // 4
console.log(add()); // 5
console.log(".........end...........");
//////////////////////////////////////////////
// self invoking anonymous function (SIAF)
(function display() {
  console.log("Hi"); // Hi
})(); // self invoking
//display();
console.log(".........end...........");
///////////////////////////////////////////////////
// Immediately Invoked Function Expression (IFFE Or iffy)
//immediately-invoked Function Expression
// two ways + passing parameter
const sum = ((x, y) => {
  return x + y;
})(4, 5); // this is iffy
console.log(sum); // 9

for (let i = 0; i <= 10; i++) {
  let result = i * 3;
  console.log(`${i} * 3 = ${result}`);
}

let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("Noooooo");
}

const arr = [3, 5, 67, 6];
console.log(arr[2]);

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.

function add2(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add2(4)(3));

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.

function multiplier(w) {
  return function(s) {
    return w * s;
  };
}
console.log(multiplier(11)(7));

function multiplier(num) {
  return function(num2) {
    return num2 * num;
  };
}

const times = multiplier(2);
console.log(times(3));
var all = 3;

(function() {
  var all = "Hi";
  console.log(all);
})();
console.log(all);

// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
//  If not, then the program should calculate how many years remain until the person retires,
//  the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000

((cureentAge, retirementAge, monthlywage, percentage) => {
  if (cureentAge >= retirementAge) {
    console.log("You are already Old");
  } else {
    let yearsTosave = retirementAge - cureentAge;
    console.log(yearsTosave + "years to go ");
    let monthTosave = yearsTosave * 12;
    console.log(monthTosave + "month to go");
    let amountSavedByMonth = (monthlywage * percentage) / 100;
    let totalSave = amountSavedByMonth * monthTosave;
    console.log(
      `you will get old in ${yearsTosave} and you will have ${totalSave} in your bank`
    );
  }
})(30, 65, 1000, 5);

let str = " Hi";
console.log(str.trim());

console.log(str.trimEnd());
console.log(str.trimStart());

let text = "Hi we will have fun now";
console.log(text.startsWith("we"));
console.log(text.endsWith(" ", 6));

let chr = "A";
console.log(chr.charCodeAt(0));
