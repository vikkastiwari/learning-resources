const log = console.log;

/** 
 * @description sort - modified using merge sort with custom comparator function
 * @argument compareFn
 */ 
Array.prototype.sort = function(compareFn) {
    log("Inside our Array.sort implementation :)")
    return mergeSort(this)
    // Split the array into halves and merge them recursively 
    function mergeSort(arr) {
        if (arr.length === 1) {
            // return once we hit an array with a single item
            return arr
        }
        const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
        const left = arr.slice(0, middle) // items on the left side
        const right = arr.slice(middle) // items on the right side
        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    }
    // compare the arrays item by item and return the concatenated result
    function merge(left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0
        while (indexLeft < left.length && indexRight < right.length) {
            let _left = left[indexLeft]
            let _right = right[indexRight]
            if (compareFn)
                compareFn = composeCompareFn(compareFn(left, right))
            compareFn = (l, r) => l < r
            if (compareFn(_left, _right)) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }
    function composeCompareFn(compareResult) {
        if (Math.sign(compareResult) == -1)
            return false
        if (Math.sign(compareResult) == 1)
            return true
        if (compareResult == 0)
            return false
    }
}

/** 
 * @description my custom filter
 * @argument callback
 */ 
Array.prototype.myFilter = function(callback) {
    const result = [];
    log(this,this.name)
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
};

const numbers = [1, 3, 2, 5, 4, 6];
const customSort = numbers.sort((a,b) =>  a > b)
const evenNumbers = numbers.myFilter((num) => {
    return (num % 2 === 0 && num < 6);
});
log(...customSort);