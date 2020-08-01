import AddEditEducationForm from "forms/AddEditEducationForm";
import addEditEducationValidate from "forms/addEditEducationValidate";
import { FORM_NAMES } from "forms/formNames";
import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

// ##############   Helper Components    ##############
/**
 *
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.submitting
 * @param {boolean} props.invalid
 * @param {string} props.formName
 * @param {object} props.experience
 * @param {string} props.experience.role
 * @param {string} props.experience.company
 * @param {string} props.experience.description
 */
const _editEducationForm = (props) => {
  const {
    anyTouched,
    handleSubmit,
    submitting,
    invalid,
    submitSucceeded,
    submitFailed,
  } = props;

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

const mapStateToProps = (state) => ({
  initialValues: state.itemBeingEdited,
});

// ###############    Main Component    ###############
const EditExperience = reduxForm({
  form: FORM_NAMES.editEducation,
  validate: addEditEducationValidate,
  enableReinitialize: true,
  touchOnChange: true,
})(_editEducationForm);

export default connect(mapStateToProps)(EditExperience);
