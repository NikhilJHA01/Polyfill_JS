const memoise = function (fn) {
  const cache = {};
  return function () {
    const KEY = JSON.stringify(arguments);

    if (cache[KEY]) {
      return cache[KEY];
    } else {
      const evaluatedValue = fn(...arguments);
      cache[KEY] = evaluatedValue;
      return evaluatedValue;
    }
  };
};

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  return factorial(n - 1) * n;
}

const memoisedFunc = memoise(factorial);

console.log(memoisedFunc(4));
console.log(memoisedFunc(4));
