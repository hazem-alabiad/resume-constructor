import {
  isAuthenticated,
  loadPersistState,
  persistState
} from "helpers/localStorageHelpers";
import educationsReducer from "reducers/educationsReducer";
import experiencesReducer from "reducers/experiencesReducer";
import itemBeingEditedReducer from "reducers/itemBeingEditedReducer";
import skillsReducer from "reducers/skillsReducer";
import userInfoReducer from "reducers/userInfoReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistentState = loadPersistState();
const rootReducer = combineReducers({
  form: formReducer,
  userInfo: userInfoReducer,
  itemBeingEdited: itemBeingEditedReducer,
  experiences: experiencesReducer,
  educations: educationsReducer,
  skills: skillsReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  persistentState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  if (isAuthenticated()) {
    persistState(store.getState());
  }
});

export default store;
