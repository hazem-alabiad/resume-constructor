import WithTrans from "components/WithTrans";
import React from "react";

// ##################   Globals   ##################

const minLen = (str, len) => {
  return str.length < len ? (
    <WithTrans keyword="MinLenErr" vars={{ num: len }} />
  ) : undefined;
};

const validYear = (str) => {
  return /^(19\d{2}|20\d{2})$/.test(str) ? undefined : (
    <WithTrans keyword="Invalid year" />
  );
};

const validRange = (start, end) => {
  return start > end ? <WithTrans keyword="Invalid year range" /> : undefined;
};

/**
 * @param {object} values
 * @param {string} values.schoolName
 * @param {string} values.degreeType
 * @param {string} values.programName
 * @param {string} values.startYear
 * @param {string} values.endYear
 */
const addEditEducationValidate = (values) => {
  const errors = {
    schoolName: undefined,
    degreeType: undefined,
    programName: undefined,
    startYear: undefined,
    endYear: undefined,
  };

  // #########    school name    #########
  if (!values.schoolName) {
    errors.schoolName = <WithTrans keyword="Required" />;
  } else {
    errors.schoolName = minLen(values.schoolName, 2);
  }

  // #########   degree type    #########
  if (!values.degreeType) {
    errors.degreeType = <WithTrans keyword="Required" />;
  } else {
    errors.degreeType = minLen(values.degreeType, 2);
  }

  // #########   program name    #########
  if (!values.programName) {
    errors.programName = <WithTrans keyword="Required" />;
  } else {
    errors.programName = minLen(values.programName, 2);
  }

  // #########   start year    #########
  if (!values.startYear) {
    errors.startYear = <WithTrans keyword="Required" />;
  } else {
    errors.startYear = validYear(values.startYear);
  }

  // #########   end year    #########
  if (!values.endYear) {
    errors.endYear = <WithTrans keyword="Required" />;
  } else {
    errors.endYear = validYear(values.endYear);
  }

  // #########   valid year range    #########
  if (
    values.startYear &&
    values.endYear &&
    !errors.endYear &&
    !errors.startYear
  ) {
    errors.endYear = validRange(values.startYear, values.endYear);
  }

  return errors;
};

export default addEditEducationValidate;
