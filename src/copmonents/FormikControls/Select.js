import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((item) => {
          return (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
