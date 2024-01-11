## Javascript Fundamentals

<details>
  <summary>1. Polyfill</summary>
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