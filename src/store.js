import { createStore, combineReducers, aplyMiddleware, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { customerListReducer } from "./pages/mat-mangmnt/reducers/customerReducer";

const reducer = combineReducers({
    customerList : customerListReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
