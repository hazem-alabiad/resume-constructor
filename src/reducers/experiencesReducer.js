import {
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  FETCH_EXPERIENCES,
} from "constants/experienceActionTypes";
import _ from "lodash";

/**
 *
 * @param {object} state
 * @param {number} state.id
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
const experienceReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE:
      return { ...action.payload.experience };
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
    case ADD_EXPERIENCE:
      return [...state, experienceReducer(undefined, action)];
    case DELETE_EXPERIENCE:
      return _.filter(state, (experience) => experience.id !== action.payload);
    default:
      return state;
  }
};

export default experiencesReducer;
