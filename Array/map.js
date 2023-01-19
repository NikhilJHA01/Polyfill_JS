Array.prototype.map = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

console.log([1, 2, 3].map((value, index, array) => value * 2));
