import { navigate } from "@reach/router";
import Axios from "axios";
import WithTrans from "components/WithTrans";
import { TOKEN_NAME } from "constants/auth";
import { ROUTE_NAMES } from "constants/routeNames";
import { getObject, setObject } from "helpers/localStorageHelpers";
import React from "react";
import { toast } from "react-toastify";
import URLS from "./urls";

// #####################    Globals   #####################
const headers = () => ({
  Authorization: `Bearer ${getObject(TOKEN_NAME)}`,
  Accept: "application/json",
  "Content-Type": "application/json",
});

// #####################    Methods   #####################
export const apiSignup = (
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

export const apiLogin = (
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

export const apiFetchItems = (
  path: String,
  token: String,
  fetchAction: Function,
  failureMsg: String
) => {
  Axios.get(URLS.BASE_URL + path, {
    headers: headers(),
  })
    .then((res) => {
      if (res.status === 200) {
        // If success
        fetchAction(res.data);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      // general error message
      toast.error(<WithTrans keyword={failureMsg} />);
    });
};

export const apiAddItem = (
  path: String,
  requestBody: Object,
  addItemAction: Function,
  closeOnSubmit: Function,
  successMsg: String,
  failureMsg: String
) => {
  Axios.post(
    URLS.BASE_URL + path,
    {
      ...requestBody,
    },
    { headers: headers() }
  )
    .then((res) => {
      if (res.status === 200) {
        // If success
        // Close the modal
        closeOnSubmit();
        addItemAction(requestBody);
        toast.success(<WithTrans keyword={successMsg} />);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      // general error message
      toast.error(<WithTrans keyword={failureMsg} />);
    });
};

export const apiDeleteItem = (
  path: String,
  itemId: Number,
  closeOnDelete: Function,
  deleteItemAction: Function,
  successMsg: String,
  failureMsg: String
) => {
  Axios.delete(URLS.BASE_URL + path, {
    data: {
      id: itemId,
    },
    headers: headers(),
  })
    .then((res) => {
      if (res.status === 200) {
        // If success
        closeOnDelete();
        deleteItemAction(itemId);
        toast.success(<WithTrans keyword={successMsg} />);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      // general error message
      toast.error(<WithTrans keyword={failureMsg} />);
    });
};

export const apiEditItem = (
  path: String,
  requestBody: Object,
  closeOnSubmit: Function,
  editItemAction: Function,
  successMsg,
  failureMsg
) => {
  Axios.put(
    URLS.BASE_URL + path,
    {
      ...requestBody,
    },
    {
      headers: headers(),
    }
  )
    .then((res) => {
      if (res.status === 200) {
        // If success
        closeOnSubmit();
        editItemAction(requestBody);
        toast.success(<WithTrans keyword={successMsg} />);
      }
    })
    .catch((err) => {
      // if failure
      console.error(err.response);

      // general error message
      toast.error(<WithTrans keyword={failureMsg} />);
    });
};
