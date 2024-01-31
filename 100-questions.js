// 1
console.log(10 - -10);
// op: 20

// 2 
console.log(typeof NaN);
// op: number

// 3
console.log(new Set([1,2,3,4,3]));

// 4
let data = {name:'anil'}
console.log(delete data.name); 
// op: true

// 5
const val = ["Peter","Anil","Sam"];
const [z] = data;
console.log(z);
// op: Peter


// 5
const val1 = ["Peter","Anil","Sam"];
const [,t] = data;
console.log(z);
// op: Anil

// 6
// print properties without dot operator
const data6 = {name:'anil',age:14};
const {age} = data6;
console.log(age);
// op: 14

// 7
const data7 = {name:'anil',age:14};
const data71 = {city:'mumbai'};
const res7 = {...data7, ...data71}
// op: {name:'anil',age:14,city:'mumbai'}
const res71 = {data7, ...data71}
// op: {data:{name:'anil',age:14},city:'mumbai'}

// 8
const data8 = {name:'anil',age:14};
const data81 = {city:'mumbai',age:23};
const res8 = {...data8, ...data81}
// op: {name:'anil',age:23,city:'mumbai'}

// 9
const res9 = false || {} || null;
console.log(res9);
// op: {} --- {} is truish value i.e. prints first true value

// 10
const res10 = null || false || '';
console.log(res10);
// op: '' -- in case of no true value it returns last value

// 11
console.log(Promise.resolve(5));
// op: Promise fullfilled -- resolve also has promise which is returned

// 12
// JSON.parse() converts JSON to javascript value

// 13
// let name = 'vikas';
// function getName(){
//     console.log(name);
//     let name = 'Tiwari';
// }
// getName();
// op: Ref Error

// 14
// let name = 'vikas';
// function getName(){
//     console.log(name);
// }
// getName();
// op: vikas

// 15
console.log(`${(x=>x)('Coding')} Future`);

// 16
function sumVal(x,y,z){
    return x+y+z;
}
sumVal(...[1,2,3])
// op: 6

// 17
const name1 = 'coding karo khush raho';
console.log(!typeof name1 === 'object');
console.log(!typeof name1 === 'string');
// js reads it from left to write
// two operations are performed ! and ===
// typeof name1 --> true
// typeof name1 is negated --> false
// false === 'object' --> false
// op: false false 

// 18
let aaa = 12
isNaN(aaa)
// op: false

// 19
let p19 = {name:'vikas'}
Object.seal(p19);
p19.name = 'tiwari' // can be done
p19.age = 13 // cannot be done
// Read seal and freeze

// 20
let data20 = [1,2,3,4,5]
data20.shift() // removes first element from the array
// op: 2,3,4,5 

// 21
let data21 = [1,2,3,4,5]
data21.pop() // removes last element from the array
// op: 1,2,3,4 

// 22
// convert data to boolean false
let data22 = "true" // anystring
console.log(!data22); // converts it boolean falsy value
// op: false
console.log(!!data22); // converts it boolean truthy value
// op: true

// 23
// difference bw map and forEach

// 24
let data24 = ['a','b','c'];
delete data24[1]
// op: ['a',empty,'c']
// length will be 3

// 25
let a25 = [1,2,3,4];
let b25 = [4,5,6,7];
let res25 = [...a25,...b25];
// op: [1,2,3,4,4,5,6,7]

// 26
let c26 = 3 ** 3; // 3 to power 3
console.log(c26);
// op: 27

// 27
let a27 = 2;
setTimeout(()=>{
    console.log(a27);
})
a27=100;
// It executes setTimeout in very last according to priority
// until then a27 became 100 
// op: 100

// 28
let a =1
let A =2
console.log(a);
console.log(A);
// op: 1 2

// 29
console.log('aaa'===`aaa`);
// op: true

// 30
let a30 = 1;
let c30 = 2;
console.log(--c30 === a30); 
// op: true

// 31
let a31 = 1;
let b31 = 1;
let c31 = 2;
console.log(a31 === b31 === --c31);
// reads left to right
// a31 === b31 --> true
// true === --c31 --> boolean === number(1) --> false 
// op: false

// 32
console.log(a32);
var a32;
// op: undefined

// 33
console.log([[[]]]);
// op: [Array(1)]0: Array(1)0: Array(0)length: 0[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)

// 34
// find OS name
// navigator.platform

// 35
for(var i=0;i<3;i++){
    setTimeout(() => console.log(i));
}
// setTimeout is executed in last
// op: 3 3 3

// 36
for(let i=0;i<3;i++){
    setTimeout(() => console.log(i));
}
// op: 0 1 2

// 37
console.log(+true);
// op: 1
console.log(typeof +true);
// op: number

// 38
let data38 = "size";
const bird = {
    size: "small"
}

console.log(bird[data38]); // data --> "size" --> small
console.log(bird["size"]); // small
console.log(bird.size); // small
console.log(bird.data38); // undefined

// 39
let a39 = 3; // type is number
let b39 = new Number(3); // type is object - created using new keyword
console.log(a39==b39); // true
console.log(a39===b39); // false

// 40
function fn40 () {
    console.log("hello");
}
fn40.name = "byeee";
fn40();
// op: hello --> adding properties is harmless

// 41
let num41 = 0;
console.log(num41++); // log hua 0 and incremented
console.log(++num41); // one se two increment hua and two is logged
console.log(num41); // two is logged

// 42
function getMe(...args){
    console.log(typeof args);
}
getMe(21);
// typeof [] --> 'Object']
// op: object

// 43
function getA(){
    'use strict'
    age = 21; // while using strict we need to specify type
    console.log(age);
}
getA();
// op: typeerror

// 44
const sum44 = eval('10*10+5');
console.log(sum44);
// eval converts into expression and returns calculated value
// op: 105

// 45
// sessionstorage --> live until tab is open
// localstorage --> accessible until its cleared from application tab

// 46
const obj46 = {1:'a',2:'b'};

console.log(obj46.hasOwnProperty("1"));
console.log(obj46.hasOwnProperty(1));
// op: true true

// 47
const obj47 = {a:'1',b:'2',a:'3'};
console.log(obj47);
// op: {a:'3',b:'2'}

// 48
const foo = () => console.log('first')
const bar = () => setTimeout(() => console.log('second'));
const baz = () => console.log('third')
foo()
bar()
baz()
// op: first third second

// 49
function sayHi(){
    return (() => 0)(); // iife
}
console.log(typeof sayHi());
// op: Number

// 50
console.log(typeof typeof 1);
// typeof 1 --> 'number'
// typeof 'number' --> string
// op: string

// 51
const num51 = [1,2,3];
num51[5] = 5;
console.log(num51);
// op: [1,2,3,empty,empty,5]

// 52
const num52 = [1,2,3]
num52[9] = num52;
console.log(num52);
// op: it will print infinite nested array

// 53
// everything in a javascript is primitive or object type

// 54
// console.log(setInterval(() => console.log('hii'),1000));
// it will return Id

// 55
console.log([..."vikas"]);
// op: ['v','i','k','a','s']

// 56
let person = {name:"vikas"}
const memb = [person]; // array has new memory location
person = null;
console.log(members);
// op: array of object

// 57
const per = {
    name:'vikas',
    age:28
}
for(const item in per){
    console.log(item);
}
// op: name, age --> it will log all keys

// 58
let data58 = 3+4+'5';
console.log(data58);
// op: 75
console.log(typeof 3+4+'5');
// typeof 3 --> number
// 'number' + 4 
// number4 + '5'
// op: number45

// 59
// call, bind and apply

// 60
function getInfo(member){
    member.name = 'Vikas'
}
const person60 = {name:'Tiwari'}
getInfo(person60); // call by ref 
console.log(person60);
// op: {name:'Vikas'}

// 61
function Car(){
    this.make = 'tata';
    return {make:'Kia'}
}
const myCar = new Car();
console.log(myCar.make);
// when we return in function its properties are overridden
// op: Kia

// 62
(() => {
    let x = (y=10);
})();
console.log(typeof x);
// op: undefined --> let is block scoped

// 63
(() => {
    let x = y = 10;
})();
// it is created like
// let x = 10;
// var y = 10;
console.log(typeof y);
// op: number

// 64
let x = 100;
(() => {
    var x = 10; // since one same identifier is present outside it is block scoped
})();
console.log(x);
// op: 100

// 65
console.log(!true - true);
// !true --> !1 --> 0
// 0 - true --> 0 - 1 --> -1
// op: -1

// 66
console.log(true + +"10");
// op: 11
