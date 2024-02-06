Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(resolve, reject);
        });
    });
};

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