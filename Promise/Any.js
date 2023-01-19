const any = function (taskList) {
  let errorResults = [];
  let promiseWithErrors = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((task) => {
      return Promise.resolve(task)
        .then((value) => resolve(value))
        .catch((err) => {
          errorResults.push(err);
          promiseWithErrors++;
          if (promiseWithErrors === taskList.length) {
            reject(errorResults);
          }
        });
    });
  });
};

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

any([test1, test2, test3])
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    // all three fails
    console.log(err);
  });
