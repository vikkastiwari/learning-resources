Array.prototype.customReduce = function(callback, initialValue) {
  // Initialize the accumulator based on the presence of initialValue
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  
  // Set the startIndex based on the presence of initialValue
  const startIndex = initialValue === undefined ? 1 : 0;

  // Iterate over the array starting from the determined startIndex
  for (let i = startIndex; i < this.length; i++) {
    // Call the provided callback function with accumulator, current element, index, and the original array
    accumulator = callback(accumulator, this[i], i, this);
  }

  // Return the final accumulated result
  return accumulator;
};

// Example 1
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.customReduce((acc, num) => acc + num, 0);
console.log(sum);

// Example 2
const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];
const allBooks = friends.customReduce((acc, cur) => [...acc, ...cur.books], []);
console.log(allBooks);