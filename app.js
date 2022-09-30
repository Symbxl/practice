const form = document.querySelector(".form");
const input = document.querySelector(".input");

const clicked = (e) => {
  e.preventDefault();
  console.log(input.value);
};

form.addEventListener("submit", clicked);

// --

const apiCall = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

// --

function greeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

const greet = greeting("hello");

function buildFunctions() {
  const arr = [];
  for (let i = 0; i < 2; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const build = buildFunctions();

build.forEach((item) => item());

// --

function factory(name, dob) {
  return {
    name,
    dob,
    getAge() {
      const date = new Date();
      return date.getFullYear() - dob;
    },
  };
}

class Person {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }
  getAge() {
    const date = new Date();
    return date.getFullYear() - this.dob;
  }
}

class Student extends Person {
  constructor(name, dob, school) {
    super(name, dob);
    this.school = school;
  }
}

const newPerson = new Person("one", 2022);
const newStudent = new Student("two", 2022, "UW");

// --

hoisted();

function hoisted() {
  return;
}

const newFunc = () => {
  return;
};

newFunc();

// --

const zach = new Person("zach", 2002);

const shallow = zach;
shallow.name = "shallow copy";
shallow.dob = 2022;

const deep = { ...zach };
deep.name = "one layer deep";

const deepCopy = Object.assign({}, zach);
const shallowCopy = Object.create(zach);

const numbers = [1, 2, 3, 4, 5];
const newLocation = numbers.splice(0, numbers.length);

// --

const addOne = (num) => {
  return console.log(num + true);
};

// --

const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`);
};

// --

const multiply = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

// --

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand, type, fuelType) {
  Car.call(this, type, fuelType);
  this.brand = brand;
  console.log(`Car details = `, this);
}

// --

const obj = { num: 2 };

function add(a, b) {
  return this.num + a + b;
}

const resultCall = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);
const funcBind = add.bind(obj, 3, 5);
const resultBind = funcBind();

// --

const HashTable = (items) => {
  let obj = {};
  for (let i = 0; i < items.length; i++) {
    if (!obj[items[i]]) {
      obj[items[i]] = 1;
    } else {
      obj[items[i]]++;
    }
  }
  return obj;
};

// -- balanced

function balanced(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}
