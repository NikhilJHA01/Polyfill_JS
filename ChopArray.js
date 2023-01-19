const chopArray = function (array, size) {
  let output = [];

  let i = 0;
  while (i < array.length) {
    output.push(array.slice(i, i + size));
    i = i + size;
  }
  return output;
};

console.log(chopArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
