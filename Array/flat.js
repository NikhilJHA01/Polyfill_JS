/* Using normal for loop */

function flat(array, depth = 1, result = []) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      flat(array[i], depth - 1, result);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

// console.log(flat([1, 2, [3, [4, 5]]], 2));

/* Using reduce and concat */
function flatDeep(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, ele) =>
          acc.concat(Array.isArray(ele) ? flatDeep(ele, depth - 1) : ele),
        []
      )
    : arr.slice();
}

console.log(flatDeep([1, 2, [3, [4, 5]]], 1));
