Array.prototype.sort = function () {};

// Best Time complexity : O(nlogn)
//  Worst O(n*2)
// Array.sort in UTF-16 code units order
const quickSort = (array) => {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const pivot = array[0];
  let greater = [];
  let lesser = [];
  for (let i = 1; i < length; i++) {
    if (array[i] > pivot) {
      greater.push(array[i]);
    } else {
      lesser.push(array[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
};
console.log(quickSort([1, 3, 2, 8, 7]));
console.log(quickSort(["a", "A", "c", "D"]));
