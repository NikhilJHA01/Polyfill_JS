const throttle = function (fn, limit) {
  let flag = true;

  return function () {
    let conetxt = this;
    let args = arguments;
    if (flag) {
      fn.apply(conetxt, args);
      flag = false;

      setInterval(() => {
        flag = true;
      }, limit);
    }
  };
};

const optimisedResize = throttle(search, 50);
function resize() {
  console.log("Resize results");
}

optimisedResize();
