import addEditExperienceValidate from "forms/addEditExperienceValidate";
import { FORM_NAMES } from "forms/formNames";
import renderField from "forms/renderField";
import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Icon } from "semantic-ui-react";
import WithTrans from "./WithTrans";

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
const _editExperienceForm = (props) => {
  const {
    anyTouched,
    handleSubmit,
    submitting,
    invalid,
    submitSucceeded,
    submitFailed,
  } = props;
  const { t } = useTranslation();

  const isDisabled = () => {
    if (invalid || !anyTouched) return true;
    if (!submitFailed && submitSucceeded) return true;
    return false;
  };

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Field required>
        <Field
          value="Role"
          name="role"
          component={renderField}
          label={t("Role")}
          type="text"
          placeholder={t("experience.role.placeholder")}
        />
      </Form.Field>
      <Form.Field required>
        <Field
          name="company"
          component={renderField}
          label={t("Company")}
          type="text"
          placeholder={t("experience.company.placeholder")}
        />
      </Form.Field>
      <Form.Field>
        <Field
          name="description"
          component={renderField}
          label={t("Description")}
          type="textarea"
          placeholder={t("experience.description.placeholder")}
        />
      </Form.Field>

      <Button
        type="submit"
        color="green"
        className="mt-5"
        size="large"
        fluid
        loading={submitting}
        disabled={isDisabled()}
      >
        <Icon name="checkmark" /> {<WithTrans keyword="Submit" />}
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  initialValues: state.experienceBeingEdited,
});

// ###############    Main Component    ###############
const EditExperienceForm = reduxForm({
  form: FORM_NAMES.editExperience,
  validate: addEditExperienceValidate,
  enableReinitialize: true,
  touchOnChange: true,
})(_editExperienceForm);

export default connect(mapStateToProps)(EditExperienceForm);
