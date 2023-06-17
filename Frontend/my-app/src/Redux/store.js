import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as gameProductreducer } from "./ProductReducer/reducer";
import { reducer as movieReducer } from "./MovieReducer/reducer";
const rootReducer = combineReducers({
 gameProductreducer,
 movieReducer
 
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
