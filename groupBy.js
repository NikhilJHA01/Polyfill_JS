const groupBy = (values, keyFinder) => {
  // using reduce to aggregate values
  return values.reduce((a, b) => {
    // depending upon the type of keyFinder
    // if it is function, pass the value to it
    // if it is a property, access the property
    const key = typeof keyFinder === "function" ? keyFinder(b) : b[keyFinder];
    console.log(b[keyFinder]);
    // aggregate values based on the keys
    if (!a[key]) {
      a[key] = [b];
    } else {
      a[key] = [...a[key], b];
    }

    return a;
  }, {});
};

//Input:
// console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));

// Output:
// { 6: [6.1, 6.3], 4: [4.2] }
// { 3: ['one', 'two'], 5: ['three'] }
