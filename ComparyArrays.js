const compare = function (arr1, arr2) {
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.length !== arr2.length
  ) {
    return false;
  }

  let result;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      result = compare(arr1[i], arr2[i]);
    } else if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
    if (!result) break;
  }
  return result;
};

console.log(compare([1, 2, [3, 4]], [1, 2, [3, 4]]));
