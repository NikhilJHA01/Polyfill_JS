Function.prototype.myBind = function (...args) {
  let context = this;
  let params = args.slice(1);
  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};

let name1 = {
  f: "Nikhil",
  l: "Jha",
};

function printFullName(city, country) {
  console.log(this.f + " " + this.l + " " + city + " " + country);
}

let showName = printFullName.myBind(name1, "Delhi");
console.log(showName("India"));
