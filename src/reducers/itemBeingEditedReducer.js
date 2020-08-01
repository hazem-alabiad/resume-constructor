import { USER_LOGOUT } from "constants/userInfoActionTypes";

const {
  SET_ITEM_BEING_EDITED,
} = require("constants/itemBeingEditedActionTypes");

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {number} action.payload.id
 * @param {string} action.payload.role
 * @param {string} action.payload.company
 * @param {string} action.payload.description
 * @returns {object}
 */
const itemBeingEditedReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ITEM_BEING_EDITED:
      return { ...action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default itemBeingEditedReducer;
