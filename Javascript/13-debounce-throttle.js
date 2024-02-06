function debounce(func, wait) {
  let timeout;
  console.log(this);
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// Usage example
const delayedLog = debounce((message) => {
  console.log(message);
}, 200);

delayedLog("Hello"); // Will log 'Hello' after 200ms
delayedLog("World"); // Will cancel the previous call and log 'World' after 200ms

function throttle(func, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}

// Usage example
const throttledLog = throttle((message) => {
  console.log(message);
}, 300);

throttledLog("One"); // Will log 'One'
throttledLog("Two"); // Will ignore this call
throttledLog("Three"); // Will log 'Three' after 300ms
