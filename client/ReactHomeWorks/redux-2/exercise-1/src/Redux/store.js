import {legacy_createStore as createStore} from "redux" 
import { counterReducer } from "./reducer/counter"


export const store = createStore(counterReducer)