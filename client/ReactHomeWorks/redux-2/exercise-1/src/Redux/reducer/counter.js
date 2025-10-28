import { DECREMENT, INCREMENT, RESET } from "../action/action";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };

    case DECREMENT:
      return { counter: state.counter - 1 };

    case RESET:
      return   initialState ;

    default:
    return  state;
  }
};
