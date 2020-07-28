import WithTrans from "components/WithTrans";
import i18n from "i18n";
import React from "react";

// ##################   Globals   ##################

const minLen = (str, len) => {
  return str.length < len ? i18n.t("MinLenErr", { num: len }) : "";
};
// const maxLen = (str, len) => {
//   return str.length > len ? i18n.t("MaxLenErr", { num: len }) : "";
// };

/**
 *
 * @param {object} values
 * @param {string} values.username
 * @param {string} values.password
 */
const validate = (values) => {
  const errors = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  };

  // ########   username    ########
  if (!values.username) {
    errors.username = <WithTrans keyword="Required" />;
  } else {
    errors.username = minLen(values.username, 2);
  }

  // ########   password    ########
  if (!values.password) {
    errors.password = <WithTrans keyword="Required" />;
  } else {
    errors.password = minLen(values.password, 3);
  }

  // ########   firstName    ########
  if (!values.firstName) {
    errors.firstName = <WithTrans keyword="Required" />;
  } else {
    errors.firstName = minLen(values.firstName, 2);
  }

  // ########   lastName    ########
  if (!values.lastName) {
    errors.lastName = <WithTrans keyword="Required" />;
  } else {
    errors.lastName = minLen(values.lastName, 2);
  }

  return errors;
};

export default validate;
