import { legacy_createStore as createStore } from "redux";
import { countReducer } from "./Reducer/conter";

export const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
