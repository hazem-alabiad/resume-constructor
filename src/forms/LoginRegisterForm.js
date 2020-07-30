import { ROUTE_NAMES } from "constants/routeNames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Field } from "redux-form";
import {
  Button,
  Form,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import renderField from "./renderField";

// ######################   Globals    #######################
const lower = (value) => value && value.toLowerCase();

/**
 * ####################   Main Component    ####################
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.submitting
 * @param {boolean} props.invalid
 * @param {string} props.formName
 */
const LoginRegisterForm = ({
  handleSubmit,
  submitting,
  invalid,
  submitSucceeded,
  formName,
}) => {
  const { t } = useTranslation();
  const isDisabled = () => {
    if (invalid) return true;
    if (window.location.pathname !== ROUTE_NAMES.login && submitSucceeded)
      return true;
    return false;
  };

  return (
    <>
      <Message attached="top">
        <Header as="h2" color="blue" textAlign="center">
          <Image size="medium" src="/favicon.jpeg" circular /> {t(formName)}
        </Header>
      </Message>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment raised attached>
          {/* If signup form hide firstName & lastName */}
          {formName.toLowerCase() === "login" ? (
            <></>
          ) : (
            <>
              <Form.Field required>
                <Field
                  name="firstName"
                  component={renderField}
                  label={t("First Name")}
                  type="text"
                  placeholder={t("John")}
                />
              </Form.Field>
              <Form.Field required>
                <Field
                  name="lastName"
                  component={renderField}
                  label={t("Last Name")}
                  type="text"
                  placeholder={t("Lweis")}
                />
              </Form.Field>
            </>
          )}
          <Form.Field required>
            <Field
              name="username"
              component={renderField}
              label={t("Username")}
              type="text"
              placeholder="admin321"
              normalize={lower}
            />
          </Form.Field>
          <Form.Field required>
            <Field
              name="password"
              component={renderField}
              label={t("Password")}
              type="password"
              placeholder="******"
            />
          </Form.Field>
          <Button
            type="submit"
            color="blue"
            className="mt-5"
            fluid
            size="large"
            loading={submitting}
            disabled={isDisabled()}
          >
            {t(formName)}
          </Button>
        </Segment>
      </Form>
    </>
  );
};

export default LoginRegisterForm;
