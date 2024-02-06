// Implementing custom call
Function.prototype.customCall = function (context, ...args) {
  context = context || window; // Use the global object if context is not provided
  console.log(context);
  const uniqueKey = Symbol(); // Create a unique key to avoid naming collisions
  context[uniqueKey] = this; // Attach the function to the context
  console.log(this,context, context[uniqueKey], uniqueKey);
  const result = context[uniqueKey](...args); // Invoke the function with provided arguments
  delete context[uniqueKey]; // Remove the temporary function from the context
  return result;
};

// Implementing custom apply
Function.prototype.customApply = function (context, argsArray) {
  context = context || window;
  const uniqueKey = Symbol();
  context[uniqueKey] = this;
  const result = context[uniqueKey](...argsArray);
  delete context[uniqueKey];
  return result;
};

// Implementing custom bind
Function.prototype.customBind = function (context, ...args) {
  const originalFunction = this;
  return function (...innerArgs) {
    return originalFunction.customApply(context, args.concat(innerArgs));
  };
};

// Example usage:

function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };

// Using customCall
greet.customCall(person, "Hello"); // Output: Hello, John!

// Using customApply
greet.customApply(person, ["Hi"]); // Output: Hi, John!

// Using customBind
const greetJohn = greet.customBind(person, "Hola", "bhola");
greetJohn(); // Output: Hola, John!
