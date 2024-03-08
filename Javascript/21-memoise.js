
function memoize(fn) {
    const res = {};
    return function(...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(this,...args);
        }   
        return res[argsCache];
    }
}

const product = (num1, num2) => {
    for(let i=1;i<=100000000;i++){}

    return num1*num2;
}

const memoizedProduct = memoize(product);

console.time('First Call')
console.log(memoizedProduct(9384,3487));
console.timeEnd('First Call')


console.time('Second Call')
console.log(memoizedProduct(9384,3487));
console.timeEnd('Second Call')