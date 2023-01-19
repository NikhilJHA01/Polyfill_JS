const deepFilter = function (obj, filter) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      deepFilter(obj[key], filter);
    } else {
      if (!filter(obj[key])) delete obj[key];
    }

    if (JSON.stringify(obj[key]) === "{}") {
      delete obj[key];
    }
  }
};

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

//filter's in-place
deepFilter(obj, (s) => typeof s === "string");

console.log(obj);
