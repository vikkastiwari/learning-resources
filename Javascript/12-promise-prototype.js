function CustomPromise(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("Executor must be a function");
  }

  // Internal state
  let state = "pending";
  let value;
  let handlers = [];

  function resolve(result) {
    if (state !== "pending") return;

    state = "fulfilled";
    value = result;
    console.log(handlers);
    handlers.forEach(({ onFulfilled }) => {
      onFulfilled && onFulfilled(value);
    });

    handlers = [];
  }

  function reject(reason) {
    if (state !== "pending") return;

    state = "rejected";
    value = reason;

    handlers.forEach(({ onRejected }) => {
      onRejected && onRejected(value);
    });

    handlers = [];
  }

  this.then = function (onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      function handle(result) {
        try {
          if (state === "fulfilled") {
            resolve(onFulfilled ? onFulfilled(result) : result);
          } else {
            reject(onRejected ? onRejected(result) : result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (state === "pending") {
        handlers.push({ onFulfilled: handle, onRejected: handle });
      } else {
        setTimeout(() => handle(value), 0);
      }
    });
  };

  this.catch = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// Example usage:
const myPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve("Success! Custom Promise"), 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
