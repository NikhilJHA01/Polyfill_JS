Array.prototype.filter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

[1, 2, 3].filter((value) => value % 2 === 0);
