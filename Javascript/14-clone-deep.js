function cloneDeep(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cloneDeep(obj[key]);
    }
  }
  return result;
}

// Usage example
const originalObj = { a: 1, b: { c: 2 } };
const clonedObj = cloneDeep(originalObj);
console.log(clonedObj); // { a: 1, b: { c: 2 } }