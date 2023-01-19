Array.prototype.some = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

console.log([1, 2, 3].some((value) => value > 4));
