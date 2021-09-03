// Redux
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
// Middleware
import thunk from "redux-thunk";
// Reducers
import cardsReducer from "./cardsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  users: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))