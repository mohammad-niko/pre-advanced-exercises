// explain below concepts and write an example for each one

// action:

// 📘 Definition:

// A plain object that describes what happened.
// It must have a type and sometimes a payload.

// 📘 Example:

const incrementAction = {
  type: "INCREMENT",
  payload: 1,
};

// action creator:

// 📘 Definition:
// A function that creates and returns an action — helps keep code clean and reusable.

// 📘 Example:

function increment(value) {
  return { type: "INCREMENT", payload: value };
}


// reducer:

// 📘 Definition:/
// A pure function that takes the current state and an action,
// and returns the new state.

// 📘 Example:

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return state;
  }
}

// store:
// 📘 Definition:

// The central place where the application state is stored.
// Created using createStore.

// 📘 Example:



const store = createStore(counterReducer);

