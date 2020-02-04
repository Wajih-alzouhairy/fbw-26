const o = {
  1: "Wajih",
  2: "ali",
  3: "Olga"
};

const obj = {
  name: "Nancy",
  lastName: "saaaa",
  age: 44,
  add: "xxxstr"
};
let aliName = "Ali";
let aliAdd = "xxxstr";
let aliAge = 22;
let aliLastName = "something";

const object = {
  color: "Red",
  size: "big",
  year: 1990,
  arr: [1, 3, 4, 5, 67]
};

const car = {};
console.log(car);
car["name"] = "Frod";
console.log(car);
car["year"] = 2020;
console.log(car);

car.age = 22;
console.log(car);
car.age = 44;
console.log(car.name);
console.log(car["name"]);

const save = new Object();
const arr1 = new Array();
console.log(save);
console.log(car.name);
console.log(car);

for (let prop in car) {
  console.log(`car.${prop} : ${car[prop]}`);
}

const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  print: function() {
    console.log(`this user ${person.name} his  born in ${person.birthYear}`);
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};
console.log(Object.keys(person));
console.log(Object.values(person));

for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

person.print();
console.log(person.old());

// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const person1 = {
  name: "Wajih",
  age: 26,
  birthYear: 1993,
  print: function() {
    console.log(`i am ${person1.name} i born in ${person1.birthYear}`);
  }
};

for (let prop in person1) {
  console.log(`person1.${prop} : ${person1[prop]}`);
}

const obj1 = { 1: 2, 2: 300 };
const obj2 = { 1: 4, 3: 3224 };
const obj3 = { 1: 6, 4: 6423 };
const totalObj = Object.assign({ name: "Ahmad" }, obj1, obj2, obj3);
console.log(totalObj);

// Get Values. Create a function that returns an array of all values of an object’s properties.
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]

const myChoice = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
};

function choices(num) {
  return Object.values(num);
}
console.log(choices(myChoice));

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

// person.printOut = () => {
//   return `Hi ${person.name} you are very short ${person.hight}, and also too old ${person.birthYear}`;
// };
// console.log(person.printOut);

Object.defineProperty(person, "birthDay", {
  value: 20,
  writable: true
});
console.log(person.birthDay);

Object.defineProperties(person, {
  p1: {
    value: 33,
    writable: true,
    p2: {
      value: {},
      writable: false
    },
    p3: {}
  }
});
console.log(person.p3);
console.log(Object.keys(person));

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// Expected output:
// ["name", "class", "course"]
// let student = {
//   name: "Mike",
//   class: "4A",
//   course: "English"
// };

// function per(per5) {
//   return Object.values(per5);
// }
// console.log(per(student));

const getProperties = obj => {
  return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person));

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

// function countOccurrences(str, letter) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log("countOccurrences");
// console.log(countOccurrences("this is a string", "i"));

// var arr = ["tree"];

// function counter(x) {
//   var count = 0,
//     temp = [];
//   x = x.split("");
//   console.log(x);
//   for (var i = 0, len = x.length; i < len; i++) {
//     if (x[i] == "a") {
//       count++;
//     }
//   }
//   return count;
// }
// var countLetters = "d";
// console.log(counter("let hero im a good boy"));

// const countLetters = {
//   name: "Ali",
//   class: "coding",
//   course: "javaScript"
// };
// function arraySplitting(text) {
//   var count = {};
//   text.split("").forEach(function(i) {
//     count[i] = count[i] ? count[i] + 1 : 1;
//   });
//   return count;
// }
// console.log(arraySplitting(" it was not easy  "));

function countLetters(str) {
  let arr = str.split("");
  let result = {};

  function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter++;
      }
    }
    return counter;
  }

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    result[x] = countOccurrences(str, x);
  }
  return result;
}
console.log(countLetters("wtfzxfubiewuohfiznr7gxheuhudfhfezzufe"));
