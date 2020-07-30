import {
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  EDIT_EXPERIENCE,
  FETCH_EXPERIENCES,
  LOADING_EXPERIENCES
} from "constants/experienceActionTypes";
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
const experienceReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE:
      return { ...action.payload };
    case EDIT_EXPERIENCE:
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
 * @param {object} action.payload.experience
 * @param {number} action.payload.experience.id
 * @param {string} action.payload.experience.role
 * @param {string} action.payload.experience.company
 * @param {string} action.payload.experience.description
 * @returns {object}
 */
const experiencesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return [...action.payload];
    case LOADING_EXPERIENCES:
      return null;
    case ADD_EXPERIENCE:
      return [...state, experienceReducer(undefined, action)];
    case DELETE_EXPERIENCE:
      return _.filter(state, (experience) => experience.id !== action.payload);
    case EDIT_EXPERIENCE:
      return _.map(state, (experience) =>
        experienceReducer(experience, action)
      );
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export default experiencesReducer;
