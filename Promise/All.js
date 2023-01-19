const myPromiseAll = function (taskList) {
  let results = [];
  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      task
        .then((val) => {
          results[index] = val;
          promisesCompleted++;
          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// function task(time) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(time);
//     }, time);
//   });
// }

// const taskList = [task(1000), task(5000), task(3000)];

// //run promise.all
// myPromiseAll(taskList)
//   .then((results) => {
//     console.log("got results", results);
//   })
//   .catch(console.error);

//   Output:
//"got results" [1000,5000,3000]

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
