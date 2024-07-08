/* function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }
function sum(a,b,c){
    return a+b+c;
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2,3)) */

/* const gst = (interest, amount) => {
  return amount + (amount * interest)/100;
}

function curry(fun){
  return function(interest){
    return function(amount){
      return fun(interest, amount);
    }
  }
}
const curriedGST = curry(gst);
let price =12000;
const indianGST = curriedGST(18);

console.log(curriedGST(18)(12)); */

/* const gst = (interest, amount) => {
  return amount + (amount * interest) / 100;
}

function curry(fun) {
  return function (interest) {
    return function (amount) {
      return fun(interest, amount);
    }
  }
}
const curriedGST = curry(gst);
let arr = [{
  Country: "ind",
  Gst: 18
},
{
  Country: "aus",
  Gst: 10
},
{
  Country: "sin",
  Gst: 12
},
];
let country = "ind", price = 12000;
let functionArray = [];
// console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
  functionArray.push({ Country: arr[i].Country, gst: curriedGST(arr[i].Gst) });
}

for (let funct of functionArray) {
  if (funct.Country == country) {
    console.log(funct.gst(price))
  }
}
 */

/* let myArr = [5,6,2,3,7,8];
myArr = [myArr.splice(0, Math.ceil(myArr.length/2)),myArr.splice(0)];
console.log(myArr);
 */

const studentsData = [
  {
    id: 1,
    name: "John",
    age: 18,
    marks: {
      math: 85,
      science: 90
    }
  },
  {
    id: 2,
    name: "Alice",
    age: 17,
    marks: {
      math: 92,
      science: 88,
      english: 85
    }
  },
  {
    id: 3,
    name: "Bob",
    age: 16,
    marks: {
      math: 78,
      science: 80
    }
  },
  {
    id: 4,
    name: "Emma",
    age: 16,
    marks: {
      math: 95,
      science: 87
    }
  },
  {
    id: 5,
    name: "Michael",
    age: 17,
    marks: {
      math: 83,
      science: 79,
      english: 90
    }
  }
];

console.log(studentsData.reduce((acc, stu) => {
  for (let keys in stu.marks) {
    const key = Object.keys(acc);
    if (key.length == 0) {
      acc[keys] = stu.marks[keys]
    }
    else {
      if (acc[key[0]] < stu.marks[keys]) {
        delete acc[key[0]]
        acc[keys] = stu.marks[keys]
      }
    }
  }
  return acc;
}, {}));