import React from "react";
import { Message } from "semantic-ui-react";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <Message color="red">{error}</Message>}
    </div>
  </>
);

export default renderField;
