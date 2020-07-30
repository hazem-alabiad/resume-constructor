import {
  SET_CURRENT_USER_INFO,
  USER_LOGOUT,
} from "../constants/userInfoActionTypes";

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {string} action.payload.username
 * @param {string} action.payload.password
 * @returns {object}
 */
const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_INFO:
      return { ...state, ...action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userInfoReducer;
