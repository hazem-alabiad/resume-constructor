import { navigate } from "@reach/router";
import Axios from "axios";
import WithTrans from "components/WithTrans";
import { TOKEN_NAME } from "constants/auth";
import { ROUTE_NAMES } from "constants/routeNames";
import { getObject, setObject } from "helpers/localStorageHelpers";
import React from "react";
import { toast } from "react-toastify";
import * as URLS from "./urls";

// #####################    Globals   #####################
const auth = () => ({ Authorization: `Bearer ${getObject(TOKEN_NAME)}` });

// #####################    Methods   #####################
export const signup = (
  username: String,
  password: String,
  firstName: String = "",
  lastName: String = ""
) => {
  Axios.post(URLS.BASE_URL + URLS.SIGNUP, {
    username,
    password,
    firstName,
    lastName,
  })
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

export const login = (
  username: String,
  password: String,
  setCurrentUserInfo: Function
) => {
  Axios.post(URLS.BASE_URL + URLS.LOGIN, {
    username,
    password,
  })
    .then((res) => {
      if (res.status === 200) {
        // If success
        setCurrentUserInfo(res.data);
        toast.success(
          <WithTrans
            keyword="login.success"
            vars={{ username: res.data.username }}
          />
        );
        // Save the user data in the local storage
        setObject(TOKEN_NAME, res.data.token);
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

export const addExperience = (
  role: String,
  company: String,
  description: String,
  addExperienceAction: Function,
  onSubmitClose: Function
) => {
  Axios.post(
    URLS.BASE_URL + URLS.EXPERIENCE,
    {
      role,
      company,
      description,
    },
    { headers: auth() }
  )
    .then((res) => {
      if (res.status === 200) {
        // If success
        // Close the modal
        onSubmitClose();
        const experience = { role, company, description };
        addExperienceAction(experience);
        toast.success(<WithTrans keyword="experience.success" />);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      // general error message
      toast.error(<WithTrans keyword="experience.failure" />);
    });
};

export const fetchExperiences = (
  fetchExperiencesAction: Function,
  token: String
) => {
  Axios.get(URLS.BASE_URL + URLS.EXPERIENCE, {
    headers: auth(),
  })
    .then((res) => {
      if (res.status === 200) {
        // If success
        fetchExperiencesAction(res.data);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      // general error message
      toast.error(<WithTrans keyword="fetchError" />);
    });
};
