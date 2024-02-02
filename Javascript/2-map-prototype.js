Array.prototype.myMap = function(fn) {
  let arr = this;
  for(let i=0;i<arr.length;i++){
    arr[i] = fn(arr.slice(0,i+1));
  }
  return arr;
};


let arr = [1,2,3,4];
function add(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum;
}
const res = arr.myMap(add);
console.log(res);
