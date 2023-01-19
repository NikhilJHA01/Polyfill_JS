/* function message(){
    console.log("hello");
  }
  
  const sample = sampler(message, 4);
  sample();
  sample();
  sample();
  sample(); // this will be executed
  sample();
  sample();
  sample();
  sample();  */

const sampler = function (fn, count) {
  let counter = 0;
  let context = this;
  return function (...args) {
    counter += 1;
    if (counter === count) {
      fn.apply(context, args);
      counter = 0;
    } else return;
  };
};
function message() {
  console.log("hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample();
