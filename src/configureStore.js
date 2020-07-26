import {
  isAuthenticated,
  loadPersistState,
  persistState,
} from "helpers/localStorageHelpers";
import userInfoReducer from "reducers/userInfoReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistentState = loadPersistState();
const rootReducer = combineReducers({
  form: formReducer,
  userInfo: userInfoReducer,
});

const store = createStore(
  rootReducer,
  persistentState,
  applyMiddleware(thunk, logger) + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  if (isAuthenticated()) {
    persistState(store.getState());
  }
});

export default store;
