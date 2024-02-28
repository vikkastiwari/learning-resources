function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j] ,arr[j + 1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

const arrayToSort = ["banana", "apple", "orange", "grape"];
console.log("Before sorting:", arrayToSort);
console.log("After sorting:", bubbleSort(arrayToSort));