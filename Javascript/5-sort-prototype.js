Array.prototype.customSort = function(compareFunction) {
    const arrCopy = [...this];
    return arrCopy.sort(compareFunction);
};

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.customSort((a ,b) => a-b);
console.log(evenNumbers); // Output: [2, 4]