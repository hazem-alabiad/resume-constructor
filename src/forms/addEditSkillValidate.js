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
 * @param {string} values.skillName
 */
const addEditSkillValidate = (values) => {
  const errors = {
    skillName: "",
  };

  // #########    skill    #########
  if (!values.skillName) {
    errors.skillName = <WithTrans keyword="Required" />;
  } else {
    errors.skillName = minLen(values.skillName, 2);
  }

  return errors;
};

export default addEditSkillValidate;
