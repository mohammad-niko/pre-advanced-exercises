# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# Counter App with React and Redux

First of All: create a react app

Second of All: install redux

Third of All create redux folder in src

Fourth of All: have fun :)

## Requirements

1. **Actions**:

   - Define three action types: `INCREMENT`, `DECREMENT`, and `RESET`.

2. **Action Creators**:

   - Create functions for:
     - Incrementing the counter: `increment()`
     - Decrementing the counter: `decrement()`
     - Resetting the counter: `reset()`

3. **Reducer**:

   - Implement a reducer that:
     - Increments the `count` state by 1.
     - Decrements the `count` state by 1.
     - Resets the `count` state to 0.

4. **Initial State**:

   - Set the initial state as an object with `count: 0`.

5. **Store**:
   - Create a Redux store using `createStore` and the counter reducer.

---

### Create React UI

You have a preview image of a counter app that you need to build using React.

---

### Connect Redux Logic to React UI

After creating the Redux logic and the counter UI using React, the next step is to connect them using the **react-redux** library.

**Steps**:

1. Install **react-redux** and wrap your project with the **Provider** component from **react-redux**.
2. Use **useDispatch** and **useSelector** hooks to store data inside the Redux state and retrieve that data.

**Requirements**:

- When the **Increment** button is clicked, the value in the Redux store should increase by one.
- When the **Decrement** button is clicked, the value in the Redux store should decrease by one.
- When the **Reset** button is clicked, the value in the Redux store should reset to zero.
