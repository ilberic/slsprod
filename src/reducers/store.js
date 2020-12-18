import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menuReducer";
import productionReducer from "./productionReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

let reducersBundle = combineReducers({
    menuReducer,
    productionReducer
})
let store = createStore(reducersBundle, composeWithDevTools(applyMiddleware(thunk)));

export default store