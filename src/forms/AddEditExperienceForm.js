import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { Field } from "redux-form";
import { Button, Form, Icon } from "semantic-ui-react";
import renderField from "./renderField";

/**
 * ##################   Main Component    ##################
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.isDisabled
 * @param {boolean} props.submitting
 */
const AddEditExperienceForm = ({ handleSubmit, isDisabled, submitting }) => {
  const { t } = useTranslation();

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
        disabled={isDisabled}
      >
        <Icon name="checkmark" /> {t("Submit")}
      </Button>
    </Form>
  );
};

export default AddEditExperienceForm;

// ##################   Types   ##################
AddEditExperienceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};
