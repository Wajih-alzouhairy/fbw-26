let str = " iam in my way to be programmer ";
console.log(str.slice(4));

let a = 1;
a = 1;
true ? console.log("its true") : console.log("it is roung");
let str1 = "Wajih";
console.log(str1.trim());

function print(str) {
  console.log(str);
}
print("Wajih");

let str2 = "4";
let result = parseInt(str2);
console.log(result);
//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.
let variable = "string";
let variable2 = 5;
console.log(variable + " " + variable2);

// Check if the following numbers are even numbers.
//  Use a ternary and if the number is even print 30 is even, else print that it is odd.

let str3 = 40;
let str4 = str3 % 2;
str4 == 30 ? console.log("30 is even") : console.log("it is odd");

let str5 = "8";
let str6 = parseInt(str5);
console.log(str6);

let num = 1.9;
let num2 = Math.floor(num);
console.log(num2);
let num3 = Math.ceil(num);
console.log(num3);
console.log(Math.max(232, 342, 100, 4000));
console.log(Math.min(32, 12, 43, 6, 1));

// Create a variable with the value of “123”. Convert it to a number.
let num4 = "123";
let num5 = parseInt(num4);
console.log(num5);
// Create a variable with the value of “130.7". Convert it to a number.
let str7 = "130.7";
console.log(parseFloat(str7)); // not anderstand

// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let variable3 = "isDog";
variable3 == "isDog" ? console.log("pat pat") : console.log("finde me a dog");

// Declare a variable named speedCheck.
//  If speedlimit is 50km/h, and your speed is above that,
//  print ‘you’re going too fast!’.
// If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
let speedCheck = 60;
let speedlimit = 50;
console.log(
  speedCheck <= speedlimit
    ? "You’re driving below the speed limit"
    : "your speed is above that"
);
//  Declare a variable named age.
//  If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
let age = 12;
console.log(age < 16 ? "serve butter beer" : "serve beer");

// Declare a variable named isStudent.
// If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
let isStudent = true;
console.log(isStudent ? "Ticket costs 5$" : "Ticket costs 12$");

// Declare a variable named okMarie.
//  Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
let okMarie = false;
console.log(okMarie ? "let me eat cake" : "Oh ");

let num6 = 0.5;
num7 = 0.2;
result2 = num7 * num6;
let result1 = result2.toFixed(num6);
console.log(result1);

console.log(Math.sqrt(16));

let nu1 = 1 > 2; // false
let nu2 = true;
let nu3 = false;
console.log((nu1 && nu2) || nu3 ? "cool" : "Not cool");
console.log(nu1 || nu2 || nu3 ? "cool" : "Not cool");

console.log(Math.floor(Math.random() * 10) + 1);

let nu4 = 6;
let nu5 = nu4 % 2;
console.log(Math.floor(Math.random(nu5) * 2 + 1));

let x1 = 33.33333455;
console.log(x1.toFixed(2));

let x2 = 22.334455;
console.log(x2.toFixed(1));

// let's do some Algorithm
//  Nancy's income is 500 Euro per week.
// How much does Nancy makes every year?

let cashWk = 500;
let cashMh = cashWk * 4;
let cashYr = cashMh * 12;
console.log(cashYr);

/* The number of hours Nancy worked over 
the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What is Nancy's average hour? */
let hours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let average = hours / 10;
let averageEy = Math.ceil(average);
console.log(averageEy);

// A math student scored 75, 70, 85, 90, 100
//on the first five tests he took .
// After he took his sixth math test,
//the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let student1 = 75 + 70 + 85 + 90 + 100;
let studentAe = 85 * 6;
let sixthTt = studentAe - student1;
console.log(sixthTt);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments.
//  He has taken 8 assessments and his average is 78%.
//  What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.

let james = 78 * 8;
let jamesTt = 80 * 9;
let jamesNeed = jamesTt - james;
console.log(`James needs a minimum of ${jamesNeed}% to get an 80% average`);

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
//  Print true if either of them are in the range.
let number1 = 60;
let number2 = 100;
if ((number1 >= 50 && number1 <= 90) || (number2 >= 50 && number2 <= 99));
{
  console.log(false);
}
// Create a new string adding “Py” in front of a given string.
//  If the given string begins with “Py” then print the original string.
let str8 = "notPy";
let str9 = str8.substring(0, 2);
console.log(str9);

// Calculate the sum of the two integers.
//  If the sum is in the range 50 to 80, print 65, otherwise print 80.
let int = 24;
let int2 = 13;
let intRt = int + int2;
if (intRt >= 50 && intRt <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// Check whether the sum of two integers is 8, or whether their difference is 8.
//  If one of these is the case, print true
let sum1 = 7;
let sum2 = 13;
let sumRt = sum1 + sum2;
let sumDe = sum1 - sum2;
if (sumRt == 8 || sumDe == 8) {
  console.log(false);
} else {
  console.log(false);
}
/* Make a variable for firstName and age and give each variable values.
 Create an if/else statement to check whether the person’s age is less than 13.
  If so, print “firstName is a child”.
   If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
    If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”
. If none of these conditions apply, print “firstName is a adult”. */

let firstName1 = "Wajih";
let age7 = 26;
if (age7 < 13) {
  console.log(`${firstName1},he is a child`);
} else if (age7 >= 13 && age7 < 20) {
  console.log(`${age7},he is a teenager`);
} else if (age7 == 20 && age7 < 30) {
  console.log(`${firstName1},is young adult`);
} else {
  console.log(`${firstName1},is a adult`);
}

//switch(<expression>)
const color = "Orange";
switch (color) {
  case "Black":
    console.log("its my secound shois");
    break;
  case "Pink":
    console.log("i hate Pink");
    break;
  case "Bluo":
    console.log("not my type");
    break;
  case "Orange":
    console.log("Finaly");
    break;
  default:
    console.log("Fu***");
}

// Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

let firstLength = 5;
let secoundLength = 6;
let theredLength = 7;
let areaTte = firstLength * secoundLength * theredLength;
console.log(`area of a Triangle ${areaTte}cm² `);

// Addition. Write a program to add up the numbers 1 to 20.
let program1 = 0;
for (let i = 1; i <= 20; i++) {
  program1 += i;
}
console.log(program1);

// There are i bottles of beer on the wall.
//  Write a program that will output, “There is 1 bottle of beer on the wall.
//  ” “There are 2 bottles of beer on the wall” up until there are five bottles.
let bottlesBeer = "Do not drink alKohol when you drive";
for (let i = 1; i <= 5; i++) {
  if (i >= 1) {
    console.log(`ther is ${i} Beer But ${bottlesBeer}`);
  } else {
    console.log(`ther are ${i} Beer But ${bottlesBeer}`);
  }
}

// The odd/even reporter.
//  Write a program that will iterate from 0 to 20. For each iteration,
//   it will check if the current number is even or odd,
//  and report that to the screen (e.g. “2 is even”).

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(` ${i} is a even number`);
  } else {
    console.log(` ${i}that is a odd number`);
  }
}
console.log("Fu***");

for (let i = 1; i <= 27; i++) {
  console.log(`${i}, I can do it`);
}
let daimon = 7;
for (let i = 0; i <= 3; i++) {
  daimon += 1;
}
console.log(daimon);

let me = "e";
for (let i = 0; i < 4; i++) {
  me += "b";
}
console.log(me);

for (let i = 9; i > -2; i--) {
  console.log(i);
}
