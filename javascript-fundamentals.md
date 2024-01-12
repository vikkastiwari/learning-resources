## Javascript Fundamentals

<details>
  <summary>Hoisting</summary>
  Hoisting gives us an advantage in that variables and functions can be accessed before they are declared. Function expressions and arrow functions cannot be hoisted. The sequence of variable declaration and initialization or the lifecycle of a variable is as follows: Declaration -> Initialization -> Assignment.

  For example: `let sayHi = function ( ) { alert ( "Hello" ) ; } ;` Here we can see a variable sayHi getting a value, the new function, created as `function() { alert("Hello"); }` . As the function creation happens in the context of the assignment expression (to the right side of = ), this is a Function Expression.
</details>

<details>
  <summary>Polyfill</summary>
  In software development, a polyfill is code that implements a feature of the development environment that does not natively support the feature.
  
  For your polyfills or override to work, it has to load first before your code. Don’t understand? Let’s say you trust your own implementation more the built-in APIs in JS, you need to load your custom implementation before your main code.
  
  // polyfills.js
  ```
  Array.prototype.map = function(cb) {
      // ...
  }
  Array.prototype.sort = function(compareFn) {
      // ...
  }
  ```
  If you do this in your project:
  
  ```
  <html>
      <script>
          console.log([2,3,4,5,6].map((i)=>i*2))
      </script>
      <script src="./polyfills.js"></script>
  </html>
  ```
  Our custom code in polyfills.js will not be executed when `[2,3,4,5,6].map((i)=>i*2)` is run. Why? because it was loaded after the function executed.
  
  To correct it, we need to load the polyfills.js before the main code is executed.
  ```
  <html>
      <script src="./polyfills.js"></script>
      <script>
          console.log([2,3,4,5,6].map((i)=>i*2))
      </script>
  </html>
  ```
</details>

<details>
  <summary>Symbol</summary>
  In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 6 (ES6) that represents a unique and immutable value.
  It is often used as an identifier for object properties to avoid name collisions
  
```
const mySymbol = Symbol('key');
   const obj = {
       [mySymbol]: 'value'
   };
```
When a Symbol is used as a property key, it doesn’t clash with other property keys, including string keys.
</details>

<details>
  <summary>Currying</summary>
  ref: https://javascript.info/currying-partials
  
  Question:
  
  ```
    add(1)(2)(3)…(n)()
  ```
It will return a callback function hence to execute that we added parentheses at the end. AKA IFFE (Immediately Invoked Function Expression)
</details>

<details>
  <summary>V8 Engine & Hot Functions</summary>

  When V8 compiles your JavaScript code, its parser generates something called an abstract syntax tree. Ignition, V8’s baseline compiler or interpreter, generates bytecode from this syntax tree. True to its just-in-time compilation nature, Ignition compiles JavaScript code, runs it, compiles it, runs it, back and forth, over and over again.

During the runtime, the bytecode is analyzed and the engine identifies the parts (“hot functions”) that can be re-compiled for optimal performance, sending that code to TurboFan, which is V8’s optimizing compiler. It’s only because of just-in-time compilation that the engine is able to identify these so-called ‘**hot functions**’ because of just-in-time compilation.

  1. Interpreter is called “Ignition”.
  2. Optimizing compiler is called “TurboFan”.
  3. Apart from Parser, there is a “pre-parser” that checks for syntax and tokens
  4. “Sparkplug” is introduced which is present between “Ignition” & “TurboFan” which is also called Fast Compiler.

  <div align="center">
      <img width="500" src="https://github.com/vikkastiwari/learning-resources/assets/51874681/e2175c05-31df-4f6d-a4b4-05d6c82faf69" alt="v8 engine">
  </div>

</details>

<details>
  <summary>Inline Caching</summary>

  V8 engine or many other JavaScript engine does is that first they run the function normally as you would expect. But, after some time when the function is called repeatedly, they assume or they act smart and just equals the repeated function calls to what the function returns to save time and improve the efficiency or speed. In this case, they equals `printUserName(userName) = “Hello John Doe”` This is called or better known as Inline Caching.

</details>
