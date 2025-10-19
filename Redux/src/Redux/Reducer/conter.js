import { increment, decrement } from "./conterAction";
import { produce } from "immer";

const initialState = {
  count: 0,
};

// export function countReducer(state = initialState, action) {
//   switch (action.type) {
//     case increment:
//       return produce(state, (draft) => {
//         draft.count += 1;
//       });
//     case decrement:
//       return produce(state, (draft) => {
//         draft.count -= 1;
//       });

//     default:
//       return state;
//   }
// }

export const countReducer = produce((draft, action) => {
  switch (action.type) {
    case increment:
      draft.count += 1;
      break;
    case decrement:
      draft.count -= 1;
      break;
  }
}, initialState);
