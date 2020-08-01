import AddEditExperienceForm from "forms/AddEditExperienceForm";
import addEditExperienceValidate from "forms/addEditExperienceValidate";
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
 */
const _editExperienceForm = (props) => {
  const {
    anyTouched,
    handleSubmit,
    submitting,
    invalid,
    submitSucceeded,
    submitFailed,
  } = props;

  const isDisabled = () => {
    if (invalid || !anyTouched) return true;
    if (!submitFailed && submitSucceeded) return true;
    return false;
  };

  return (
    <AddEditExperienceForm
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
  form: FORM_NAMES.editExperience,
  validate: addEditExperienceValidate,
  enableReinitialize: true,
  touchOnChange: true,
})(_editExperienceForm);

export default connect(mapStateToProps)(EditExperience);
