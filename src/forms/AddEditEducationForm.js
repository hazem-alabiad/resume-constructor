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
const AddEditEducationForm = ({ handleSubmit, isDisabled, submitting }) => {
  const { t } = useTranslation();

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Field required>
        <Field
          name="schoolName"
          component={renderField}
          label={t("School Name")}
          type="text"
          placeholder={t("education.schoolNamePlaceholder")}
        />
      </Form.Field>
      <Form.Field required>
        <Field
          name="degreeType"
          component={renderField}
          label={t("Degree type")}
          type="text"
          placeholder={t("education.degreeTypePlaceholder")}
        />
      </Form.Field>
      <Form.Field required>
        <Field
          name="programName"
          component={renderField}
          label={t("Program name")}
          type="text"
          placeholder={t("education.programNamePlaceholder")}
        />
      </Form.Field>
      <Form.Field required>
        <Field
          name="startYear"
          component={renderField}
          label={t("Start year")}
          type="text"
          placeholder={t("education.startYearPlaceholder")}
        />
      </Form.Field>
      <Form.Field required>
        <Field
          name="endYear"
          component={renderField}
          label={t("End year")}
          type="text"
          placeholder={t("education.endYearPlaceholder")}
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

export default AddEditEducationForm;

// ##################   Types   ##################
AddEditEducationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};
