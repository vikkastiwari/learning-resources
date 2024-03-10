// Program to check if a subarray with 0 sum exits or not

const subArrayWithZeroSum = (arr) => {
    console.log(arr);
    for(let i =0;i<arr.length;i++){
        sum = arr[i];
        if(sum===0) {
            return true;
        };

        for(let j=i;j<arr.length;j++){
            sum += arr[j];
            if(sum===0) {
                return true;
            };
        }   
    }
    return false;
}

let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
let res = subArrayWithZeroSum([...arr]);
console.log(res);