import AddEditSkillForm from "forms/AddEditSkillForm";
import addEditSkillValidate from "forms/addEditSkillValidate";
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
const _AddSkillForm = (props) => {
  const {
    handleSubmit,
    submitting,
    invalid,
    anyTouched,
    submitFailed,
    submitSucceeded,
  } = props;
  const isDisabled = () => {
    if (invalid || !anyTouched || (!submitFailed && submitSucceeded))
      return true;
    return false;
  };

  return (
    <AddEditSkillForm
      handleSubmit={handleSubmit}
      isDisabled={isDisabled()}
      submitting={submitting}
    />
  );
};

// ###############    Main Component    ###############
const AddSkill = reduxForm({
  form: FORM_NAMES.addSkill,
  validate: addEditSkillValidate,
  touchOnChange: true,
})(_AddSkillForm);

export default AddSkill;
