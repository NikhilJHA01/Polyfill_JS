Array.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) callback(this[i], i, this);
  }
};

[1, 2, 3].forEach((value, index, array) =>
  console.log(value, "at", index, "of", array)
);
