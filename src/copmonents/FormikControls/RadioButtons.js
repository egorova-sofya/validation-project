import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          //   console.log(field);
          return options.map((item) => (
            <React.Fragment key={item.key}>
              <input
                type="radio"
                id={item.value}
                {...field}
                value={item.value}
                checked={field.value === item.value}
              />
              <label htmlFor={item.value}>{item.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
