## Javascript Fundamentals

<details>
  <summary>Debouncing and Throttling</summary>

  - Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed.
  - Throttling ensures that the function is called at a regular interval, even if the event is triggered multiple times.
</details>

<details>
  <summary>Polyfill implementation & Flattening array</summary>

  - Implementing polyfill examples of race condition
  - implementing flatning array and objects
      
    {a:1, b.c:2, b.c.d:3 ...} and so on

   [Read more](https://medium.com/swlh/how-to-flatten-an-array-in-javascript-6b3fef075655)
</details>

<details>
  <summary>== vs ===</summary>
  
  - 0 == false   // true
  - 0 === false  // false
  - 1 == "1"     // true
  - 1 === "1"    // false
  - null == undefined // true
  - null === undefined // false
  - '0' == false // true
  - '0' === false // false
  - []==[] or []===[] //false, refer different objects in memory
  - {}=={} or {}==={} //false, refer different objects in memory
</details>

<details>
  <summary>Compare 2 JSON objects in javascript</summary>

  - One simple way to compare two JSON objects is to use JSON.stringify to convert them into strings and then compare the strings.

  ```

  function areEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 2 } };
  console.log(areEqual(obj1, obj2)); // Output: true
  ```
  - You can use the Ramda library to compare two JSON objects as well. Ramda provides a function called equals for this purpose.
  ```

  const R = require('ramda');
  
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 2 } };
  
  console.log(R.equals(obj1, obj2)); // Output: true
  ```

  - Another option is to use a library, such as Lodash, that provides a method for deep comparison of objects.

  ```
  const _ = require('lodash');
  
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 2 } };
  console.log(_.isEqual(obj1, obj2)); // Output: true
  ```
</details>

<details>
  <summary>Web Workers</summary>

  - Concurrency: Web Workers are a browser feature that allows you to run JavaScript code in the background, separate from the main browser thread. This enables concurrent execution of tasks without blocking the user interface.
  - Use Cases: Web Workers are commonly used for tasks that are computationally intensive or time-consuming, such as data processing, image manipulation, or complex calculations. By running these tasks in a separate thread, they don’t impact the responsiveness of the web page.
  - Communication: Web Workers can communicate with the main thread using a messaging system. They can send and receive messages, allowing for coordination between the main thread and the worker.
  - Browser Support: Web Workers are supported in most modern browsers.

    [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
</details>

<details>
  <summary>Service Workers</summary>

  Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

  - A service worker is run in a worker context: it therefore has no DOM access.
  - It runs on a different thread to the main JavaScript that powers your app, so it is non-blocking.
  - It is designed to be fully async; as a consequence, APIs such as synchronous XHR and Web Storage can't be used inside a service worker.

  [Setting up service worker - demo app](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#demo)
  
  [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
</details>

<details>
  <summary>What is ployfill?</summary>

  Polyfill, or even Polyfilla, is any code component that makes cutting-edge HTML, CSS or JavaScript functions available in older browsers that inherently lack support. In most cases, a polyfill is written in JavaScript.
</details>

<details>
  <summary>What are server sent events?</summary>

  Developing a web application that uses server-sent events is straightforward. You'll need a bit of code on the server to stream events to the front-end, but the client side code works almost identically to websockets in part of handling incoming events. This is a one-way connection, so you can't send events from a client to a server.

- SSE provides a unidirectional flow of data from the server to the client. The server initiates the communication, sending updates to clients.
- SSE uses a text-based protocol, which means that data sent from the server to the client is typically in a text format (usually JSON or plain text).
- SSE handles reconnection automatically.
- SSE establishes a persistent connection between the client and the server, allowing the server to send a stream of events to the client. Each event can have a unique type and data associated with it.
- The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below.
- List of events (onopen, onmessage,onerror) available for server-sent events.

  ```

  if (typeof EventSource !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
  }
  ```
  
  [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#receiving_events_from_the_server)
</details>

<details>
  <summary>z = [99, 78, 56, 32][1, 2, 3]; --> What z will log?</summary>

  ```

  z = [99, 78, 56, 32][1, 2, 3];
  It will transform to
  z = [99, 78, 56, 32][3];
  and output will be
  o/p: 32
  ```

  Exaplanation:
  ```

  a = 1,2,3,4;
  It will log
  o/p: 4 - The iterator reads it from left to right - so latest value is 4.
  ```
  Similarly its happening in the above case.
  

</details>

<details>
  <summary>Event Delegation</summary>

  Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

  So instead of binding events to all childs elements we prefer binding the event to only parent element and the behaviour remains exact same due to event bubbling.
  ```

  var form = document.querySelector("#registration-form");
  // Listen for changes to fields inside the form
  form.addEventListener(
    "input",
    function (event) {
      // Log the field that was changed
      console.log(event.target);
    },
    false
  );
  ```

</details>

<details>
  <summary>Event flow - Event bubbling and event capturing</summary>
  
  - Event Capturing Phase: When you click the button, the event starts its journey from the top (the root of the document) and moves down to the target element. In this case, it travels from the document’s root to the <div> (parent element), then to the <button> (child element). This is called the capturing phase.
 - Event Target Phase: The event reaches the target element, which is the <button> in this case.
 - Event Bubbling Phase: After reaching the target, the event starts bubbling up. It goes from the <button> back to the <div> and eventually to the root of the document. This is called the bubbling phase.
</details>

<details>
  <summary>Object.create() vs Object.assign()</summary>

  - The [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) static method creates a new object, using an existing object as the prototype of the newly created object.
  - The [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
</details>

<details>
  <summary>Priority of execution of callback, promise, setTimeout, process.nextTick()</summary>

  **callback(Regular callbacks) < setTimeout < promise < process.nextTick()**
</details>

<details>
  <summary>Execution Stack</summary>

  It is also known as the “call stack,” a LIFO (Last in, First out) data structure that stores all the execution context of the function calls that are in progress. When a function is called, a new execution context is created and pushed onto the stack. When the function completes, its context is popped off the stack.

The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches the context below it in the current stack.

The execution context is created during the creation phase. The following things happen during the creation phase:

- LexicalEnvironment component is created.
- VariableEnvironment component is created.
</details>

<details>
  <summary>Seal and freeze methods</summary>
  
  The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

  The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.
</details>

<details>
  <summary>
     Ways to clone an Object - Shallow & Deep copy 
  </summary>

  - Json.string and Json.parse
  - [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#examples)
  - Spread Operator (Not for nested object)
  - [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
  - Recursion
</details>

<details>
  <summary>Factory function</summary>
  
  A factory function in JavaScript is a function that returns an object. It is a pattern used to create objects in a straightforward and organized manner. Instead of using constructor functions and the new keyword to create new objects, a factory function encapsulates the object creation process and returns a new object.

  ```
  function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
}

const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

console.log(person1.greet()); // Output: Hello, my name is Alice and I am 25 years old.
console.log(person2.greet()); // Output: Hello, my name is Bob and I am 30 years old.
  ```
</details>

<details>
  <summary>Default Parameters</summary>

  In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.

  ```
  function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
    // …
  }
  ```
</details>

<details>
  <summary>Enhanced Object Literals</summary>

  - Object literal enhancement is used to group variables from the global scope and form them into javascript objects. It is the process of restructuring or putting back together.
  - We can also create object methods with object literal enhancement.
  - `this` keyword can be used to access the object keys.

  ```
  // global variable declaration 
  var name = "Duke"; 
  var age = 100; 
  var sayHello = function(){ 
    console.log("Hello, ",this.name); 
  }

  // Using Object Literal Enhancement 
  // Combines all variables into a dog object 
  var ole = {name, age, sayHello};
  console.log(ole); 
  ole.sayHello();
  ```

  When defining object methods, it is no longer necessary to use the function keyword. Object literal enhancement allows us to pull global variables into objects and reduces typing by making the function keyword unnecessary.

  ```
  // Old syntax 
var driver1 = { 
    name: "John", 
    speed: 50, 
    car:"Ferrari", 
    speedUp: function(speedup){ 
         this.speed = this.speed + speedup; 
         console.log("new speed = "+ this.speed) 
    } 
} 
  
// New syntax without function keyword 
const driver2 = { 
    name: "Jane", 
    speed: 60, 
    car:"McLaren", 
    speedUp(speedup){ 
         this.speed = this.speed + speedup; 
         console.log("new speed = "+ this.speed) 
    } 
} 
  ```
</details>

<details>
  <summary>Iterators and Generators</summary>
  
  Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.

  [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
</details>

<details>
  <summary>weakmap and weakset</summary>
  
  - [weakmap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#examples)
  - [weakset](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
</details>

<details>
  <summary>Object.create() & Prototype</summary>
  Object created from Object.create({}) --> will have a prototype object within

  Object created from Object.create(null) --> will have not a prototype object within
</details>


<details>
  <summary>Hoisting</summary>
  
  Hoisting gives us an advantage in that variables and functions can be accessed before they are declared. Function expressions and arrow functions cannot be hoisted. The sequence of variable declaration and initialization or the lifecycle of a variable is as follows: Declaration -> Initialization -> Assignment.

Hoisting is not happening with an arrow function, function expression, or variable initialization.

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
