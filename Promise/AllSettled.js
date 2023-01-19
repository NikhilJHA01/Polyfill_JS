/* 
 @param {Array<any>} promises - notice that input might contains non-promises
* @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
*/

const allSettled = function (taskList) {
  const mappedPromise = taskList.map((task) =>
    Promise.resolve(task).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );

  return Promise.all(mappedPromise);
};

function allSettled2(promises) {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const results = [];
  let completed = 0;
  return new Promise((resolve) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          results[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[i] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    }
  });
}

const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
const b = new Promise((resolve, reject) => reject(9));
const c = "";

allSettled2([a, b, c]).then((val) => {
  console.log(val);
});
