import {
  ADD_SKILL,
  DELETE_SKILL,
  EDIT_SKILL,
  FETCH_SKILLS,
  LOADING_SKILLS
} from "constants/skillActionTypes";
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
const skillReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SKILL:
      return { ...action.payload };
    case EDIT_SKILL:
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
 * @param {string} action.payload.skillName
 * @returns {object}
 */
const skillsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SKILLS:
      return [...action.payload];
    case LOADING_SKILLS:
      return null;
    case ADD_SKILL:
      return [...state, skillReducer(undefined, action)];
    case DELETE_SKILL:
      return _.filter(state, (skill) => skill.id !== action.payload);
    case EDIT_SKILL:
      return _.map(state, (skill) => skillReducer(skill, action));
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export default skillsReducer;
