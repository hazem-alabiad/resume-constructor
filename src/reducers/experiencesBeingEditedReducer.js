import { USER_LOGOUT } from "constants/userInfoActionTypes";

const {
  SET_EXPERIENCE_BEING_EDITED,
} = require("constants/experienceBeingEditedActionTypes");

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {object} action.experience
 * @param {number} action.experience.id
 * @param {string} action.experience.role
 * @param {string} action.experience.company
 * @param {string} action.experience.description
 * @returns {object}
 */
const experienceBeingEditedReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EXPERIENCE_BEING_EDITED:
      return { ...action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default experienceBeingEditedReducer;
