Array.prototype.customFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.customFilter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]