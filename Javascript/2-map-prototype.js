Array.prototype.customMap = function(callback) {
    // Create an empty array to store the mapped values
    const result = [];
  
    // Iterate over each element in the array
    for (let i = 0; i < this.length; i++) {
      // Call the provided callback function with the current element, index, and the original array
      // Push the result of the callback to the 'result' array
      result.push(callback(this[i], i, this));
    }
    console.log(this);
    // Return the new array with the mapped values
    return result;
};


Array.prototype.myMap = function(fn) {
  let arr = this;
  for(let i=0;i<arr.length;i++){
    arr[i] = fn(arr.slice(0,i+1));
  }
  return arr;
};

function add(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum;
}

let arr = [1,2,3,4,5]
let res = arr.customMap(item => item+1);
console.log(res);


