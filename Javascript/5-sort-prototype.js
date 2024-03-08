Array.prototype.customSort = function(compareFunction) {
    const arrCopy = [...this];
    for(let i=0;i<arrCopy.length;i++){
        for(let j=0;j<i-1+arrCopy.length;j++){
            if(compareFunction(arrCopy[j], arrCopy[j + 1]) > 0)
                [arrCopy[j],arrCopy[j+1]] = [arrCopy[j+1],arrCopy[j]]
        }
    }
    return arrCopy;
};

const numbers = [1, 2, 3, 5, 4];

const evenNumbers = numbers.customSort((a ,b) => a-b);
console.log(evenNumbers); // Output: [2, 4]