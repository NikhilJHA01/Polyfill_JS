Array.prototype.every = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

console.log([1, 2, 3].every((value) => value < 2));
