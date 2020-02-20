let kind = 9;
kind < 16 ? console.log("stay in home") : console.log("go to cinma");

let name = "wajih";
console.log(typeof name);
console.log(name.length);
console.log(name[2]);
name[0] === "w" ? console.log("it is right") : console.log("it is not right");
let restOf = name.substring(1);
console.log(restOf);
let toUpperCase = name.toUpperCase();
console.log(toUpperCase);
let toLowerCase = name.toLowerCase();
console.log(toLowerCase);

let userName = "Mahmod";
let firstChr = userName[0].toLocaleLowerCase();
console.log(firstChr);
let secondChr = userName[1].toUpperCase();
console.log(secondChr);
let toUpTl = userName.substring(1).toUpperCase();
console.log(toUpTl);

let text = userName.includes("hm");
console.log(text);

let text2 = name.includes("r");
console.log(text2);

let ourName = "meandyou";
let text3 = ourName.substring(3).toUpperCase();
console.log(text3);

let study = "JavaScript";
let room = 26;
let className = "fbw-26";
let dci = `i study ${study},we are in room ${room},clss name is ${className}.`;
console.log(dci);

let num = 1;
console.log(num);
num = 1 + 1;
console.log(num);
num += 5;
console.log(num);
num++;
console.log(num);

// 7. Create a new string from a given string,
//  taking the last 3 characters of the string and add them to both the front and back of the new string.
//  The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let str1 = "string";
let taking = str1.slice(str1.length - 3);
let result = taking + str1 + taking;
console.log(result);

// Create a variable and assign a string value to it.
//  Then, convert the value to upper case
// and print the converted value to the console and check whether it includes “Java”.

let variable = "stringUndString";
let upp = variable.toUpperCase();
console.log(upp);
let result1 = upp.includes("java");
console.log(result1);

// Create a new string from a given string by changing the position of first and last characters.
// The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let newString = "JavaScript";
let firstChr1 = newString[0];
let lastChr1 = newString[newString.length - 1];
console.log(lastChr1);
let result2 = newString.substring(1, newString.length - 1);
console.log(result2);
console.log(lastChr1 + result2 + firstChr1);

// Create 3 different variables about yourself using strings as values e.g.
//  let firstName = “Maria”. Print the sentence to the console using string interpolation e.g.
//  “My name is Maria. I live in Berlin and I am a teacher”
let name2 = "wajih";
let lastName2 = "Alzouhairy";
let age = 26;
let result3 = `my name is ${name2},i am ${age},years old ,my last name is ${lastName2} thats it `;
console.log(result3);

// Declare a variable and assign the value “the quick brown fox” (all in lower case).
//  Capitalize the first letter of that string. Print the result to the console.
let variable2 = "the quick brown fox";
let firstChr3 = variable2[0].toLocaleUpperCase(1);
console.log(firstChr3);
let myFrindName = "Anas";
let ihmAge = 26;
let result6 = `he is Monky ${myFrindName}, ${ihmAge} years old `;
console.log(result6);
