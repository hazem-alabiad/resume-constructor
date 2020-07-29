import {
  CLEAR_CURRENT_USER_INFO,
  SET_CURRENT_USER_INFO
} from "../constants/userInfoActionTypes";

const INITIAL_STATE = {
  id: null,
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  token: "",
};

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
const userInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_INFO:
      return { ...state, ...action.payload };
    case CLEAR_CURRENT_USER_INFO:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userInfoReducer;
