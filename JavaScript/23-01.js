const numbers = [1, 2, 4, 55, 67];
let arrCall = numbers.find(num => num == 55);
console.log(arrCall);

const str = "JavaScript";
let newRevStr = str
  .split("")
  .reverse()
  .join("");
console.log(newRevStr);

const hacking = str => {
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArr.push(letters[i] == "e");
      letters[i] = 3;
      hackedArr.push(letters[i] == "i");
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]);
    }
  }
  let result = hackedArr.join("");

  return result;
};
let codeStr = " Hi i am nice aaa";
console.log(hacking(codeStr));

function isSymmetrical(num) {
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
  return true;
}
console.log(isSymmetrical(33233));
console.log(isSymmetrical(1234556));
console.log(isSymmetrical(1));

const toCamelCase = str => {
  let splitStr = str.split("_");
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr;
    if (splitStr[i] == splitStr[0]) {
      camelArray.push(splitStr[0]);
      continue;
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArray.push(newWord);
  }

  let result = camelArray.join("");
  return result;
};

console.log(toCamelCase("snack_log_hi"));

// Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// 1:19
// Extra Practice
// Preserve proper capitalization as in the examples below.
// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

function pigLatin(str) {
  let translation = [];
  let lowerCase = str.toLowerCase();
  let splitStr = str.split(" ");
  const vowels = ["a", "e", "o", "i", "u"];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0];
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    const newString = remainder + firstChr + "ay";
    translation.push(newString);
  }
  let result = translation.join(" ");
  return result;
}
const strPig = "higo that is fun";
console.log(pigLatin(strPig));
