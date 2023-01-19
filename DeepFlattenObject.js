// https://learnersbucket.com/examples/interview/deep-flatten-object-in-javascript-1/

const deepFlatten = function (obj, prefix) {
  let output = {};
  //   if (Object.prototype.toString.call(obj) !== "[object Object]") {
  //     return obj;
  //   }
  for (let key in obj) {
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        const { ...arrToObj } = obj[key];
        const newObj = deepFlatten(arrToObj, newKey);
        output = { ...output, ...newObj };
      } else {
        const newObj = deepFlatten(obj[key], newKey);
        output = { ...output, ...newObj };
      }
      deepFlatten(obj[key]);
    } else {
      output = { ...output, [newKey]: obj[key] };
    }
  }
  return output;
};

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

console.log(deepFlatten(nested));
