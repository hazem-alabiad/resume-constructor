import { navigate } from "@reach/router";
import { STATE, USER_INFO } from "constants/auth";
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
  let user_info = getObject(USER_INFO);
  return user_info && user_info.token ? true : false;
};

export const logout = (): void => {
  localStorage.clear();
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
  try {
    let persistState = getObject(STATE);
    return persistState ? persistState : undefined;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
