Array.prototype.reduce = function (callback, acc) {
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

console.log([1, 2, 3].reduce((acc, ele) => acc + ele, 0));
