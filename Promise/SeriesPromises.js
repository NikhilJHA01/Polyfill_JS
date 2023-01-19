const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${i}`);
    }, 1000);
  });
};

const promises = [asyncTask(1), asyncTask(2), asyncTask(3)];

const asyncSeries = async function (promises) {
  for (let promise of promises) {
    try {
      const response = await promise;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

console.log(asyncSeries(promises));
