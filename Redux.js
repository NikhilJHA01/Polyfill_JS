// https://www.freecodecamp.org/news/redux-in-24-lines-of-code/

// simplified createStore function

const createStore = (yourReducer) => {
  let listeners = [];
  let currentState = yourReducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = yourReducer(currentState, action);

      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe: (newListener) => {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener);
      };

      return unsubscribe;
    },
  };
};

// Redux architecture pieces
const initialState = { count: 0 };

const actions = {
  increment: { type: "INCREMENT" },
  decrement: { type: "DECREMENT" },
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.increment.type:
      return {
        count: state.count + 1,
      };

    case actions.decrement.type:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

// DOM elements
const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");

// Wire click events to actions
incrementButton.addEventListener("click", () => {
  store.dispatch(actions.increment);
});

decrementButton.addEventListener("click", () => {
  store.dispatch(actions.decrement);
});

// Initialize UI display
const counterDisplay = document.querySelector("h1");
counterDisplay.innerHTML = parseInt(initialState.count);

// Update UI when an action fires
store.subscribe(() => {
  const state = store.getState();

  counterDisplay.innerHTML = parseInt(state.count);
});
