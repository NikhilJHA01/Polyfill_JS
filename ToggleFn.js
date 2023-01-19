/* 
let hello = toggle("hello");
hello() // "hello";
hello() // "hello";

let onOff = toggle("on", "off");
onOff() // "on"
onOff() // "off"
onOff() // "on" 
*/

const toggle = (...args) => {
  let currentCall = -1;
  return function () {
    currentCall += 1;
    return args[currentCall % args.length];
  };
};

let onOff = toggle("on", "off", "reset");
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
