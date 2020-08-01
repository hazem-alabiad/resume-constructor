import {
  ADD_EDUCATION,
  DELETE_EDUCATION,
  EDIT_EDUCATION,
  FETCH_EDUCATIONS,
  LOADING_EDUCATIONS
} from "constants/educationActionTypes";
import { USER_LOGOUT } from "constants/userInfoActionTypes";
import _ from "lodash";

/**
 *
 * @param {object} state
 * @param {number} state.id
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {number} action.payload.id
 * @param {string} action.payload.role
 * @param {string} action.payload.company
 * @param {string} action.payload.description
 * @returns {object}
 */
const educationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return { ...action.payload };
    case EDIT_EDUCATION:
      return state.id === action.payload.id ? { ...action.payload } : state;
    default:
      return state;
  }
};

/**
 *
 * @param {object[]} state
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {number} action.payload.id
 * @param {string} action.payload.role
 * @param {string} action.payload.company
 * @param {string} action.payload.description
 * @returns {object}
 */
const educationsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EDUCATIONS:
      return [...action.payload];
    case LOADING_EDUCATIONS:
      return null;
    case ADD_EDUCATION:
      return [...state, educationReducer(undefined, action)];
    case DELETE_EDUCATION:
      return _.filter(state, (education) => education.id !== action.payload);
    case EDIT_EDUCATION:
      return _.map(state, (education) => educationReducer(education, action));
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export default educationsReducer;
