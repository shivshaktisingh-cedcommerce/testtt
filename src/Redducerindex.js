import { combineReducers } from "redux";
import { reducer_fun } from "./Reduxreducer";
import { reducer_fun1 } from "./Reduxreducer1";

const rootReducer= combineReducers({
    reducer_fun , reducer_fun1
})
export default rootReducer