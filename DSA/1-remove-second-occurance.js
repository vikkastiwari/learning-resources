function removeSecondOccurance(str) {
    let freq = new Map();
    let res = '';
    for(let i=0; i<str.length;i++){
        if(!freq.has(str[i]) || str[i] === ' '){
            freq.set(str[i],1);
            res += str[i];
        }
    }
    return res;
}

let s = 'Game of Thrones';
let res = removeSecondOccurance(s);
console.log(res);