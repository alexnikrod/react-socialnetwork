import React from "react";
import s from "./FormControls.module.scss";

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? s.formControl__error : ""}>
      <div>{props.children}</div>
      <div>{hasError && <span>{meta.error}</span>}</div>
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
