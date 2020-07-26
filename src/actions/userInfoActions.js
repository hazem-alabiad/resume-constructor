import {
  SET_CURRENT_USER_INFO,
  CLEAR_CURRENT_USER_INFO,
} from "constants/actionTypes";

export const setCurrentUserInfo = (userInfo) => ({
  type: SET_CURRENT_USER_INFO,
  payload: userInfo,
});

export const clearCurrentUserInfo = () => ({
  type: CLEAR_CURRENT_USER_INFO,
});
