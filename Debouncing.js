const debounce = function (fn, delay) {
  let timer;
  return function () {
    let args = arguments;
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const optimisedSearch = debounce(search, 500);
function search() {
  console.log("search results");
}

optimisedSearch();
