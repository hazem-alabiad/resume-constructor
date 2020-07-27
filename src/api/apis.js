import { navigate } from "@reach/router";
import Axios from "axios";
import WithTrans from "components/WithTrans";
import { USER_INFO } from "constants/auth";
import { ROUTE_NAMES } from "constants/routeNames";
import { setObject } from "helpers/localStorageHelpers";
import React from "react";
import { toast } from "react-toastify";
import * as URLS from "./urls";

// #####################    Globals   #####################
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

// #####################    Methods   #####################
/**
 * @param {string} username
 * @param {string} password
 */
export const signup = (username, password, firstName = "", lastName = "") => {
  Axios.post(
    URLS.BASE_URL + URLS.SIGNUP,
    {
      username,
      password,
      firstName,
      lastName,
    },
    {
      headers: headers,
    }
  )
    .then((res) => {
      if (res.status === 200) {
        // If success
        toast.success(<WithTrans keyword="register.success" />);
        navigate(ROUTE_NAMES.login);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      if (err.response.status === 400) {
        let username = err.response.data.split("'")[1];
        toast.error(
          <WithTrans
            keyword="register.duplicate"
            vars={{ username: username }}
          />
        );
      } else {
        // general error message
        toast.error(<WithTrans key="register.failure" />);
      }
    });
};

/**
 *
 * @param {string} username
 * @param {string} password
 * @param {Function} setCurrentUser Dispatches an action to set the user data
 */
export const login = (username, password, clearCurrentUserInfo) => {
  Axios.post(
    URLS.BASE_URL + URLS.LOGIN,
    {
      username,
      password,
    },
    {
      headers: headers,
    }
  )
    .then((res) => {
      if (res.status === 200) {
        // If success
        clearCurrentUserInfo(res.data);
        toast.success(
          <WithTrans
            keyword="login.success"
            vars={{ username: res.data.username }}
          />
        );
        // Save the user data in the local storage
        setObject(USER_INFO, res.data);
        //redirect to home
        navigate(ROUTE_NAMES.home);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);
      if (err.response && err.response.status === 400) {
        toast.error(<WithTrans keyword="login.invalid" />);
      } else {
        // general error message
        toast.error(<WithTrans keyword="login.failure" />);
      }
    });
};
