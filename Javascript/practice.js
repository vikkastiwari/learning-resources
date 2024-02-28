function flattenObject(obj, parentKey = '', ) {
    let result = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if(typeof obj[key] === 'object' && obj[key] !== null){
                let res = flattenObject(obj[key], newKey);
                result = {...result, ...res};
            }else{
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

const nestedObject = {
    a: {
        b: {
            c: 1
        },
        d: 2
    },
    e: 3
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);

Promise.myRace = function(promises) {
    return new Promise((resolve,reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve,reject);
        });
    })
}

const myPromise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Success! 1'), 3000);
});

const myPromise2 = new Promise((resolve) => {
    setTimeout(() => resolve('Success! 2'), 1000);
});

const res = Promise.myRace([myPromise1,myPromise2]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});