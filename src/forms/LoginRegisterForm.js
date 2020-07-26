import React from "react";
import { useTranslation } from "react-i18next";
import { Field } from "redux-form";
import {
  Button,
  Form,
  Header,
  Image,

  Message, Segment
} from "semantic-ui-react";
import renderField from "./renderField";

/**
 *
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.submitting
 * @param {boolean} props.invalid
 * @param {string} props.formName
 */
const LoginRegisterForm = ({ handleSubmit, submitting, invalid, formName }) => {
  const { t } = useTranslation();
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
              <Form.Field>
                <label htmlFor="firstName">{t("First Name")}</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder={t("John")}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="lastName">{t("Last Name")}</label>
                <Field
                  name="lastName"
                  component="input"
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
            disabled={submitting || invalid}
          >
            {t(formName)}
          </Button>
        </Segment>
      </Form>
    </>
  );
};

export default LoginRegisterForm;
