export const initialstate = [];

export function taskReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          description: action.payload,
          isCompleted: false,
          user_ID: "68e66650845538b847e773fe",
        },
      ];

    case "delete":
      return state.filter((item) => item._id !== action.payload);

    case "edit":
      return;

    case "toggle":
      const newIsCompleted = !action.payload.isCompleted;
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, isCompleted: newIsCompleted }
          : item
      );

    default:
      return [...state];
  }
}
