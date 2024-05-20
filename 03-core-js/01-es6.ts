// ES6 - ES2015
// ES7 - ES2016
// ES8 - ES2017
// ES2018

// tc39

// 1. Default Parameters
const defaultWidth = 10;

function areaOfRect(length: number = defaultWidth, width = length) {
  return length * width;
}

console.log(areaOfRect(5, 4));
console.log(areaOfRect(10));
console.log(areaOfRect());

// 2. Template Literals

const firstName = "Phil";
const lastName = "Glover";
const fullName = "Your full name is " + firstName + " " + lastName + ".";
console.log(fullName);

const fullName1 = `Your full name is ${firstName} ${lastName}.`;
console.log(fullName1);

const name = "Jack";
const jack = "Jack";

console.log(name === jack);

// 3. Object Literals

type Computer = {
  make: string;
  model: string;
  chip: string;
  year?: number;
};

interface IComputer {
  make: string;
  model: string;
  chip: string;
  year?: number;
}

const make = "apple";
const model = "mini";
const chip = "m1";

const myComputer: IComputer = {
  make,
  model,
  chip,
};

myComputer.year = 2024;

// 4. Arrow Functions

const arr = ["kevin", "jack", "estelle", "alison"];

function toUpperCase(value: string) {
  return value.toUpperCase();
}

const arrowUpperCase = (name: string) => name.toUpperCase();

console.log(arr.map(arrowUpperCase));
console.log(arr.map((name) => name.toUpperCase()));

const add = (a: number, b: number): number | string => {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("must use numbers");
  }
  return a + b;
};

function addFunc(a: number, b: number): number | string {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("must use numbers");
  }
  return a + b;
}

console.log(add(1, 2));
console.log(add(parseInt(process.argv[2]), parseInt(process.argv[3])));

// 5. var/let/const

// var/let => mutable
// const => immutable

function letFunction() {
  let scopedLet: undefined | string = undefined;
  console.log("Before defining block: ", scopedLet);
  if (true) {
    scopedLet = "This is a scoped variable";
    console.log("Inside block: ", scopedLet);
  }
  console.log("After defined block: ", scopedLet);
}

letFunction();

function simulateDom() {
  const pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };

  for (let i = 1; i <= 3; i++) {
    // 1
    const element = pseudoDom["button" + i]; // <- something going on here
    element.click = function () {
      return "Item " + i + " is clicked."; // 2
    };
  }
  console.log(pseudoDom.button1.click()); // Item ___ is clicked
  console.log(pseudoDom.button2.click()); // Item ___ is clicked
  console.log(pseudoDom.button3.click()); // Item ___ is clicked
  return pseudoDom;
}

simulateDom();

const arr1 = [1, 3, 2];
const arr2 = [1, 2, 3];
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

const arr3 = arr2;

arr3.push(7);
console.log(arr2);

console.log(arr3 == arr2);

// console.log(true === true);
// console.log(4 === 4);
// console.log("Hello" === "Hello");
// 3, 3, 3
// 1, 12, 123
// error ...
// 1, 2, 3
// reference

// Typing complex objects

type APIResponse = {
  companies: {
    directors: {
      name: string;
    }[];
  }[];
};

const response: APIResponse = {
  companies: [
    {
      directors: [
        {
          name: "John",
        },
      ],
    },
  ],
};
