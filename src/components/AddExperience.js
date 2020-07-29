import { FORM_NAMES } from "forms/formNames";
import renderField from "forms/renderField";
import React from "react";
import { useTranslation } from "react-i18next";
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
 */
const _AddExperienceForm = ({
  handleSubmit,
  submitting,
  invalid,
  onSubmitClose,
}) => {
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
        disabled={submitting || invalid}
      >
        <Icon name="checkmark" /> {<WithTrans keyword="Submit" />}
      </Button>
    </Form>
  );
};

// ###############    Main Component    ###############
const AddExperienceForm = reduxForm({
  form: FORM_NAMES.addExperience,
})(_AddExperienceForm);

export default AddExperienceForm;
