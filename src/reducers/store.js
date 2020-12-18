import {combineReducers, createStore} from "redux";
import menuReducer from "./reducers/menuReducer";

let reducersBundle = combineReducers({
    menuReducer
})
let store = createStore(reducersBundle);

export default store