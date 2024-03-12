var name = 'Vikas 0'
var obj = {
  name: 'Vikas 1',
  props:{
    name: 'Vikas 2',
    printName: function () {
      return this.name;
    },
  },
  myName : function () {
    return this.name;
  },
  myNameIffe: (function(){
    return this.name?.split(' ')[0];
  })(),
  myNameArrowFn: () => {
    return name.split(' ')[1];
  }
}

console.log(obj.props.printName());
console.log(obj.myName());
console.log(obj.myNameIffe);
console.log(obj.myNameArrowFn());
/*
Output:
  Vikas 2
  Vikas 1
  undefined
  0
*/ 

// ---------------------------------

var obj = {
  arrowFunc: () => {
      console.log(this === obj);
  },
  regularFunc: function() {
      console.log(this === obj);
  }
};

obj.arrowFunc();
obj.regularFunc();
// output: 
//  false
//  true

// ---------------------------------

function func() {
  console.log(arguments);
};

func(10);
// output: [Arguments] { '0': 10 }

// ---------------------------------

var func = () => {
  console.log(arguments);
};
func(10);

// output: Reference error
// Inside the arrow function func, arguments refers to the arguments object of the enclosing scope, 
// which is likely to be the global scope or the scope of the closest non-arrow function. 
// However, arrow functions do not have their own arguments binding, so this line will result in a 
// reference error since arguments is not defined in the scope of func.

// NOTE: It will return global scope object if found else reference error
// - on oneCompiler online compiler it returns closest scope of non-arrow function
// - but on chrome console it returns refernce

// ---------------------------------

console.log(x);
var x = 5;
// Output: undefined

// ---------------------------------

{/* <button id="myButton">Click me</button>
<script>
    document.getElementById('myButton').addEventListener('click', function() {
        console.log(this.textContent);
    });
</script> */}
// Output: Click me

// ---------------------------------

console.log(foo());
function foo() {
  return 'bar';
}
// Ouput: bar

// ---------------------------------

console.log(foo());
const foo = () => {
  return 'bar';
}
// Ouput: ReferenceError: Cannot access 'foo' before initialization

// ---------------------------------

console.log(1>0>1);
// 1>0 -> true -> true>1 -> false
// op: false 

// ---------------------------------

console.log(NaN === NaN);
// op: false
// NaN is not considered equal to itself according to JavaScript's specification.
// use the isNaN() function or other methods to determine if a value is NaN.

// ---------------------------------

console.log([] + []);
console.log(typeof ([] + []));
/*
  op: ""
      string
*/ 
