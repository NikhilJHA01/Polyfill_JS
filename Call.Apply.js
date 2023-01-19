// Polyfill for call
Function.prototype.mycall = function (thisArg, ...args) {
  // Calls a function from the context of thisArg

  // Add the method to the object
  // Call the function
  // Remove the method

  console.log(this);
  console.log(thisArg);
  if (thisArg === null || thisArg === undefined) {
    return this(...args);
  } else if (typeof thisArg !== "object") {
    thisArg = Object(thisArg);
  }

  const sym = Symbol();
  thisArg[sym] = this;
  const result = thisArg[sym](...args);

  delete thisArg[sym];

  return result;
};

// Polyfill for apply
Function.prototype.myApply = function (thisArg, args) {
  if (thisArg === null || thisArg === undefined) {
    return this(...args);
  } else if (typeof thisArg !== "object") {
    thisArg = Object(thisArg);
  }

  const sym = Symbol();
  thisArg[sym] = this;
  const result = thisArg[sym](...args);

  delete thisArg[sym];

  return result;
};

//Call and apply Example
let person1 = {
  f: "Nikhil",
  l: "Jha",
};
let person2 = {
  f: "Ashok",
  l: "Kumar",
};

printFullName = function (age, city) {
  console.log(this.f, this.l, age, city);
};

console.log(printFullName.mycall(person1, 12, "delhi"));
// console.log(printFullName.myApply(person2, [122, "delhi"]));
