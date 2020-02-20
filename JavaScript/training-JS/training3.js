let arr = ["Wajih", "Ali", "mahmod", "khaled"];
console.log(arr[0]);

let arrNum = [2, 4, 5, 7, 9, 3];
console.log(arrNum[3]);

let arrNum1 = ["First", "2nd", "3rd", "4th"];
// console.log(arrNum.length);
for (let i = 0; i < arrNum1.length; i++) {
  console.log(`${i} is the ${arrNum1[i]}`);
}
let arrName = ["Khaled", "mahmod", "raaed", "Ali", "Ahmad"];
for (let i = 0; i < arrName.length; i++) {
  console.log(`${i} he is ${arrName[i]}`);
}
let ageArrays = ["23", "26", "44", "67", "80"];
let ageArray = "i dont know what is this";
console.log(ageArrays.length);
console.log(ageArray.length);

console.log(ageArrays.slice(3));
console.log(ageArrays.splice(0, 3));
let strArray = ["moo", "soo", "foo", "hoo"];
let strArray2 = strArray.splice(0, 2);
console.log(strArray2);

let str = ["why", "what", "yes"];
let str2 = str.splice(0, 1);
console.log(str2);

// 1. Declare a variable named “euroCities” and assign an array to the variable e.g.
// [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
//  Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let declare = euroCities[1];
// 2. Change the first item in the array to “Damascus”.
euroCities[0] = "Damascus";
console.log(euroCities);
console.log(declare);
//3. Print the length of the array “euroCities”.
let print = euroCities.length;
console.log(print);
let justDo = euroCities.splice(euroCities.length - 2);
console.log(justDo);

// 6. Create another variable named asianCities and
// assign an array of at least 5 cities to the variable.
let asianCities = ["Damascus", "Dubai", "Riad", "HongKong", "Oman"];
let tryJoin = asianCities.join("");
console.log(tryJoin);

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.
let number1 = [1, 3, 6, 9];
let sum = 0;
let product = 1;
for (let i = 0; i < number1.length; i++) {
  sum += number1[i];
  product *= number1[i];
}
console.log(`the sum for Array is  ${sum},the product is ${product}`);
