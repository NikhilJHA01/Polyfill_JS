const deepCopy = function (objectA) {
  if (objectA == null || typeof objectA !== "object") {
    return objectA;
  }

  const objectB = Array.isArray(objectA) ? [] : {};

  for (const key in objectA) {
    const val = objectA[key];

    objectB[key] = typeof val === "object" ? deepCopy(val) : val;
  }
  return objectB;
};

let arr = [{ a: 1 }, { b: 2 }, [1, 2]];
let arr2 = deepCopy(arr);
arr[2][0] = 10;
console.log(arr2);
