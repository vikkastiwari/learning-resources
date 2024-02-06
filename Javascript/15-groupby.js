function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

// Usage example
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

const groupedByAge = groupBy(people, "age");
console.log(groupedByAge);
// Output: { '25': [{ name: 'Bob', age: 25 }], '30': [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }] }
