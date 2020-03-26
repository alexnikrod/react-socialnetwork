import React from "react";
import s from "./FormControls.module.scss";
import { Field } from "redux-form";

export const FormControl = ({ meta: {touched, error}, children }) => {
  const hasError = touched && error;

  return (
    <div className={hasError ? s.formControl__error : ""}>
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = props => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = props => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (name, placeholder, component, validators, props = {}, text = "") => {
  return (
    <div>
      <Field
        name={name}
        placeholder={placeholder}
        component={component}
        validate={validators}
        {...props}
      />{text}
    </div>
  );
};
