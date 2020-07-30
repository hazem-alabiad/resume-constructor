import {
  SET_CURRENT_USER_INFO,
  USER_LOGOUT,
} from "constants/userInfoActionTypes";

export const setCurrentUserInfo = (userInfo) => ({
  type: SET_CURRENT_USER_INFO,
  payload: userInfo,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
