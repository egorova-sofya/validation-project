import { ErrorMessage, Field } from "formik";
import React from "react";
// import DatePicker from "react-datepicker";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "../TextError";

function DatePicker({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(e) => setFieldValue(name, e)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
