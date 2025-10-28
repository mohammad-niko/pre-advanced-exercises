import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increaseByAmount(state, action) {
      const amount = action.payload || 0
      state.value += Number(amount);
    },
  },
});

export const { increment, decrement, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
