import React from "react";
import { Message, TextArea } from "semantic-ui-react";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  placeholder,
}) => {
  if (type === "textarea") {
    return (
      <>
        <label>{label}</label>
        <div>
          <TextArea {...input} placeholder={placeholder} type={type} />
          {touched && error && <Message color="red">{error}</Message>}
        </div>
      </>
    );
  } else {
    // Text input type
    return (
      <>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={placeholder} type={type} />
          {touched && error && <Message color="red">{error}</Message>}
        </div>
      </>
    );
  }
};

export default renderField;
