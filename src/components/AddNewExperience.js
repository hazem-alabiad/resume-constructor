import { FORM_NAMES } from "forms/formNames";
import renderField from "forms/renderField";
import React from "react";
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Icon, TextArea } from "semantic-ui-react";
import WithTrans from "./WithTrans";

// ##############   Helper Components    ##############
/**
 *
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.submitting
 * @param {boolean} props.invalid
 * @param {string} props.formName
 */
const AddNewExperienceForm = ({ handleSubmit, submitting, invalid }) => {
  const { t } = useTranslation();

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Field required>
        <Field
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
      <Form.Field required>
        <label>{<WithTrans keyword="Description" />}</label>
        <Field
          name="description"
          component={TextArea}
          placeholder={t("experience.description.placeholder")}
        />
      </Form.Field>

      <Button
        type="submit"
        color="green"
        className="mt-5"
        size="large"
        fluid
        disabled={submitting || invalid}
      >
        <Icon name="checkmark" /> {<WithTrans keyword="Submit" />}
      </Button>
    </Form>
  );
};

// ###############    Main Component    ###############
const AddNewExperience = reduxForm({
  form: FORM_NAMES.addNewExperience,
})(AddNewExperienceForm);

export default AddNewExperience;