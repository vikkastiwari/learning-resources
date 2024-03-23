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

Function.prototype.myBind = function (context, ...args) {
    const ogFunction = this;
    return function (...innerArgs) {
        return ogFunction.apply(context,args.concat(innerArgs));
    }
}

Function.prototype.myCall = function (context,...args) {
    context = context || window;
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const res = context[uniqueKey](...args);
    delete context[uniqueKey];
    return res;
}

function greet(...args){
    console.log(`Hello ${this.name}, ${args}`);
}

const person = {
    name: 'vikas'
}
console.log(greet.myBind(person,'Hi','Bolo')('kidhar'));
console.log(greet.myCall(person,'Hi','Bolo'));


var x = 1;
setTimeout(() => {
    let obj = {
        x : 2,
        getData: function getData() {
            return this.x;
        }
    }
    console.log(obj.getData());
},0);

console.log('-------------------')
var x1 = 2;
Promise.resolve(1)
.then(console.log(x1))
.then(() => {throw new Error('Error')})
.catch(() => console.log(3))
.finally(console.log(4))
.then(() => console.log(5))

Function.prototype.customBind = function (context, ...args) {
    const ogFunction = this;
    return function(...innerArgs) {
        return ogFunction.apply(context, args.concat(innerArgs));
    }
}






Promise.customAll = function(promises) {
    return new Promise((resolve, reject) => {
        let resolvedPromise = [];
        let counter = promises.length;

        function handlePromise(index, result) {
            resolvedPromise[index] = result;
            counter--;

            if(counter === 0){
                resolve(resolvedPromise);
            }
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                (result) => handlePromise(index, result),
                (error) => reject(error),
            )
        })
    })
}

const myPromise11 = new Promise((resolve) => {
    setTimeout(() => resolve('Success! 1'), 1000);
  });
  
  const myPromise12 = new Promise((resolve) => {
    setTimeout(() => resolve('Success! 2'), 1000);
  });
  
  const res1 = Promise.customAll([myPromise1,myPromise2]).then((res) => {
    console.log(res);
  }).catch((error) => {
    console.log(error);
  })



