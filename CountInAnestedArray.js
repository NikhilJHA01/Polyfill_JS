// Given a nested array and a callback function, count all the elements that pass the test in the callback and return the count.

const countInArray = function (arr, test) {
  let count = 0;

  const search = function (array) {
    for (let ele of array) {
      if (Array.isArray(ele)) {
        search(ele);
      } else {
        if (test(ele)) count += 1;
      }
    }
  };
  search(arr, test);
  return count;
};

// Input:
const arr = [[1, [2, ["s", 4, "foo", { a: 1, b: 2 }]], "bar"]];
const count = countInArray(arr, (e) => typeof e === "number");
console.log(count);

// Output:
// 4
