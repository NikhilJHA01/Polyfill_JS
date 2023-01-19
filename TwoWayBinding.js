// https://codesandbox.io/s/two-way-binding-in-js-sj4dvx

function model(state, element) {
  element.value = state.value;
  Object.defineProperty(state, "value", {
    get() {
      return element.value;
    },
    set(new_value) {
      console.log("setter");
      element.value = new_value;
      printVal();
    },
  });
}

const btn = document.getElementById("incrementVal");
const viewEl = document.getElementById("val");
const inputEl = document.getElementById("inputEl");

function printVal() {
  viewEl.innerText = state.value;
}

const state = { value: "" };
model(state, inputEl);
inputEl.addEventListener("keyup", (event) => {
  state.value = event.target.value;
});

btn.addEventListener("click", () => {
  state.value = Number(state.value) + 1;
});

/* HTML

 <input id="inputEl" placeholder="Enter a number..." type="text" />
      <span id="val"></span>
      <button id="incrementVal">Increment</button>

*/

// console.log(input.value) // 'BFE'
// state.value = 'dev'
// console.log(input.value) // 'dev'
// input.value = 'BFE.dev'
// input.dispatchEvent(new Event('change'))
// console.log(state.value) // 'BFE.dev'
