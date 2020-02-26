for (let i = 0; i < 20; i++) {
  i += 1;
  console.log(i);
}

const arrName = ["ahmad", "mahmod", "abas", "dbas"];
for (let i = 0; i < arrName.length; i++) {
  arrName[i] =
    arrName[i][0].toUpperCase() + arrName[i].substring(1).toLocaleLowerCase();
}
console.log(arrName);
function display(str) {
  console.log(str);
}
display("Wajih");

const names = ["Hadi", "Olga", "Nancy", "Ahmad", "Ali"];
let x = 1;
console.log(Array.isArray(names));

const numbers = [22, 33, 44, 55, 66, 77];
console.log(Array.isArray(numbers));

console.log(names.includes("Hadi")); // to show that this is there or mot
console.log(names.indexOf("Ahmad")); // to show the index num

let arr3 = [33, 44, 55, 66];
let arr4 = [11, 22, 77, 88];
let totalArr = arr3.concat(arr4);
console.log(totalArr);

let result1 = names.filter(name => name.length == 4);
console.log(result1);
let result2 = names.find(name => name[0] == "N");
console.log(result2);
const intArray = [2, 3, 5, 6, 8];
let result3 = intArray.map(x => x + 1);
console.log(result3);

let arr = ["ee", "rr", "tt", "zz"];
console.log(arr[0].includes("z"));

let arr1 = [1, 2, 3];
let arr2 = [4, 3, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);
