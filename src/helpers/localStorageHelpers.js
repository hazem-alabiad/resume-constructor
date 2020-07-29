import { navigate } from "@reach/router";
import { STATE, TOKEN_NAME } from "constants/auth";
import { ROUTE_NAMES } from "constants/routeNames";

export const setItem = (key: String, value: String): void => {
  localStorage.setItem(key, value);
};

export const getItem = (key: String): String => {
  return localStorage.getItem(key);
};

export const setObject = (key: string, value: Object): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getObject = (key: String): Object => {
  return JSON.parse(localStorage.getItem(key));
};

export const isAuthenticated = (): Boolean => {
  let token = getObject(TOKEN_NAME);
  return token ? true : false;
};

export const logout = (
  clearCurrentUserInfo: Function,
  clearExperiencesCache: Function
): void => {
  localStorage.clear();
  clearCurrentUserInfo();
  clearExperiencesCache();
  navigate(ROUTE_NAMES.login);
};

export const persistState = (state: Object) => {
  try {
    setObject(STATE, state);
  } catch (err) {
    console.error(err);
  }
};

export const loadPersistState = () => {
  if (isAuthenticated()) {
    try {
      let persistState = getObject(STATE);
      return persistState ? persistState : undefined;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
};
