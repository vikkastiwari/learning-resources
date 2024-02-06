Promise.customAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let remainingPromises = promises.length;

    function handleResult(index, result) {
      results[index] = result;
      remainingPromises--;

      if (remainingPromises === 0) {
        resolve(results);
      }
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (result) => handleResult(index, result),
        (error) => reject(error)
      );
    });
  });
};

const myPromise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Success! 1'), 1000);
});

const myPromise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Success! 2'), 1000);
});

const res = Promise.customAll([myPromise1,myPromise2]).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
})