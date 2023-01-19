function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...more) {
        return curried(...args, ...more);
      };
    }
  };
}

function multiply()

let curriedFunc = curry(multiply);
