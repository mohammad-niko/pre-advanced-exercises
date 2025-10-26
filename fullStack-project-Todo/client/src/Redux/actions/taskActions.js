export const SETALLTASKS = "SET-ALL-TASKS"
export const ADD = "ADD";
export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";
export const EDIT = "EDIT";

export const SETALLAction = (payload)=>({type:SETALLTASKS,payload})
export const ADDAction = (payload) => ({ type: ADD, payload });
export const DELETEAction = (payload) => ({ type: DELETE, payload });
export const TOGGLEAction = (payload) => ({ type: TOGGLE, payload });
export const EDITAction = (payload) => ({ type: EDIT, payload });
