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
const AddEditSkillForm = ({ handleSubmit, isDisabled, submitting }) => {
  const { t } = useTranslation();

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Field required>
        <Field
          name="skillName"
          component={renderField}
          label={t("Skill name")}
          type="text"
          placeholder={t("skill.skillNamePlaceholder")}
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

export default AddEditSkillForm;

// ##################   Types   ##################
AddEditSkillForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};
