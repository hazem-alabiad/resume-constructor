import AddEditEducationForm from "forms/AddEditEducationForm";
import addEditEducationValidate from "forms/addEditEducationValidate";
import { FORM_NAMES } from "forms/formNames";
import React from "react";
import { reduxForm } from "redux-form";

// ##############   Helper Components    ##############
/**
 *
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.submitting
 * @param {boolean} props.invalid
 * @param {string} props.formName
 */
const _AddEducationForm = ({
  handleSubmit,
  submitting,
  invalid,
  submitFailed,
  submitSucceeded,
  anyTouched,
}) => {
  const isDisabled = () => {
    if (invalid || !anyTouched || (!submitFailed && submitSucceeded))
      return true;
    return false;
  };

  return (
    <AddEditEducationForm
      handleSubmit={handleSubmit}
      isDisabled={isDisabled()}
      submitting={submitting}
    />
  );
};

// ###############    Main Component    ###############
const AddEducation = reduxForm({
  form: FORM_NAMES.addEducation,
  validate: addEditEducationValidate,
})(_AddEducationForm);

export default AddEducation;
