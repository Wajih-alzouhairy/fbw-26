// Destructuring objects as function parameters
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(22, { name: "Ali" });
const userData = {
  firstName: "Hadi",
  lastName: "Nsreeny",
  get fullName() {
    // this is getter method
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    // this is setter method
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};

// getter
userData.fullName;
// userData.firstName = 'Ali';
// userData.lastName = 'Xxx';

// setter
userData.fullName = "Ali xxx";

// constructor()

function Person(name, age, activities) {
  this.name = name;
  this.age = age;
  this.activities = activities;
}

let ali = new Person("Ali", 22, ["party", "dance"]);
console.log(ali);
const ojb = new Date();
console.log(ojb);

function Me(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.printOut = function() {
    console.log(this.name, this.lastName);
  };
}

let wajih = new Me("Wajih", "Alzouhairy");
console.log(wajih);
wajih.printOut();

// class

class Animals {
  // setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(`It is very cute ${this.kind},and lives in ${this.hometown}`);
  }
}
let casper = new Animals("Dog", "La");
casper.display();

let sofi = new Animals("Fish", "Berlin");
sofi.kind = "Cat";

const dyson = new Animals("Fish ", "Berlin");
console.log(dyson);

class Color {
  constructor() {
    this.name = " placeholder";
    this.age = 0;
    this.birthDay = 0;
  }
}
const red = new Color();
red.name = "Red";
red.age = 122334;
console.log(red);

const objects = new Date();

// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method
// called describe which returns a string with the following syntax: “name, age years old”
// So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”

class Person2 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`his name ${this.name}, ${this.age}`);
  }
}

let heuman = new Person2("John", "19 years old");
heuman.display();

// TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”

class TV {
  constructor(_brand, _chanel = 1, _volume = 50) {
    this.brand = _brand;
    this.chanel = _chanel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(`volume is ${this.volume}`);
    } else {
      console.log("this is too much");
    }
  }
  decVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log(`volume is ${this.volume}`);
    } else {
      console.log("this is not too much ");
    }
  }
  reset() {
    this.chanel = 1;
    this.volume = 50;
  }
  ranChanel() {
    this.chanel = Math.floor(Math.random() * 51);
    console.log(`Chanel ${this.chanel}`);
  }
  display() {
    return `this Tv ${this.brand},has  ${this.chanel}, and ${this.volume}`;
  }
}
let samsung = new TV("SAmsung", 20, 100);
samsung.incVolume();
samsung.ranChanel();
let apple = new TV("Apple", 100, 30);
console.log(apple.display());

class Person1 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`Hey ${this.name}, i am parent class`);
  }
}
class Kid extends Person1 {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `${this.name} is a ${this.age} years old, i am child class `;
  }
}

let zain = new Kid("Zain", 10);
zain.display();
console.log(zain.show());
const nancy = new Kid("Nancy", 40);
console.log(typeof nancy);
zain.increment = function() {
  console.log("Cool");
};

// Array.filter ()
let names = ["Ali", "Nancy", "Olga", "Hadi"];
// const result = names.filter(name => name.length > 3);

// console.log(result);

// names.map(x => console.log(x));
let letters = ["a", "c", "b", "e", "d"];
let numbers = [2, 1, 6, 7, 8, 9, 10, 10000];
// result = numbers.reduce((acc, cur) => acc + cur);
// console.log(result);
letters.sort();
console.log(letters);
names.sort();
console.log(names);
numbers.sort();
console.log(numbers);
