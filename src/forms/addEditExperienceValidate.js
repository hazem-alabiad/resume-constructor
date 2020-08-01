import WithTrans from "components/WithTrans";
import React from "react";

// ##################   Globals   ##################

const minLen = (str, len) => {
  return str.length < len ? (
    <WithTrans keyword="MinLenErr" vars={{ num: len }} />
  ) : (
    ""
  );
};

/**
 *
 * @param {object} values
 * @param {string} values.role
 * @param {string} values.company
 * @param {string} values.description
 */
const addEditExperienceValidate = (values) => {
  const errors = {
    role: "",
    company: "",
    description: "",
  };

  // #########    role    #########
  if (!values.role) {
    errors.role = <WithTrans keyword="Required" />;
  } else {
    errors.role = minLen(values.role, 2);
  }

  // #########   company    #########
  if (!values.company) {
    errors.company = <WithTrans keyword="Required" />;
  } else {
    errors.company = minLen(values.company, 2);
  }

  return errors;
};

export default addEditExperienceValidate;
